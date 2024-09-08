import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data";

const ListingDetail = ({ isLoggedIn, userData }) => {
  const { id } = useParams(); 
  const [listing, setListing] = useState(null);
  const [newComment, setNewComment] = useState(""); 
  const [comments, setComments] = useState([]); 

  useEffect(() => {
    const foundListing = data.find((item) => item.id === parseInt(id)); 
    setListing(foundListing);

    if (foundListing) {

      const storedComments = JSON.parse(localStorage.getItem(`comments-${id}`)) || [];
      setComments([...foundListing.comments, ...storedComments]); 
    }
  }, [id]);

  const handleAddComment = () => {
    if (isLoggedIn && newComment.trim()) {
      const userName = userData ? `${userData.firstName} ${userData.lastName}` : "Anonim"; 
      const newCommentObj = { id: Date.now(), name: userName, text: newComment };
      const updatedComments = [...comments, newCommentObj];
      setComments(updatedComments);

  
      localStorage.setItem(`comments-${id}`, JSON.stringify(updatedComments.filter(comment => comment.name === userName)));
      setNewComment("");
    } else {
      alert("Yorum eklemek için giriş yapmalısınız.");
    }
  };

  const handleDeleteComment = (commentId) => {
    const updatedComments = comments.filter(comment => comment.id !== commentId);
    setComments(updatedComments);


    if (userData) {
      localStorage.setItem(
        `comments-${id}`,
        JSON.stringify(updatedComments.filter(comment => comment.name === `${userData.firstName} ${userData.lastName}`))
      );
    }
  };

  if (!listing) {
    return <div>İlan bulunamadı</div>;
  }

  return (
    <div>
      <container>
        <div className="list-image-container">
        <img className="listcard-image" src={`../images/${listing.coverImg}`} alt={listing.title} />
      </div>
      <div className="list-container">
        <div className="card--stats">
        <img src="../images/star.png" className="card--star" alt=""/>
        <span className="bold">{listing.stats.rating}</span> 
        <span> ({comments.length} reviews)</span>
        </div>
        <h1>{listing.title}</h1>
        <p>{listing.description}</p>
        <p className="card--price">
        <span className="list-bold">From ${listing.price}</span> / person
        </p>
      </div>
      </container>
      
      <h3 style={{textAlign: "center", fontSize:"25px"}} >Comments ({comments.length})</h3> 
      <div className="comments-section">
        {comments.map((comment, index) => (
          <div key={index} className="comment">
            <strong>{comment.name}:</strong> {comment.text}
            {isLoggedIn && userData && comment.name === `${userData.firstName} ${userData.lastName}` && (
              <button className="delete--button" onClick={() => handleDeleteComment(comment.id)}>✖</button>
            )}
          </div>
        ))}
      </div>

      {isLoggedIn ? (
        <div className="add-comment">
          <form>
           <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Write your comments..."
          />
          <button className="comment--button" onClick={handleAddComment}>Add a Comment</button> 
          </form>
        </div>
      ) : (
        <p>Please log in to add a comment.</p>
      )}
    </div>
  );
};

export default ListingDetail;
