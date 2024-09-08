import React, { useState} from "react";
import { useNavigate } from "react-router-dom";

export default function Card(props) {
    const [isFavorite, setIsFavorite] = useState(false);
    const navigate = useNavigate()

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
        if (!isFavorite) {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            favorites.push(props.item); 
            localStorage.setItem("favorites", JSON.stringify(favorites));
        } else {
            const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
            const updatedFavorites = favorites.filter(fav => fav.id !== props.item.id);
            localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        }
    };

    const handleCardClick = () => {
        navigate(`/listings/${props.item.id}`); 
    };

    return (
        <div className="card">
            <div className="card--heart-icon" onClick={handleFavoriteClick}>
                {isFavorite ? "❤️" : "🤍"}
            </div>
            {props.item.badgeText && <div className="card--badge">{props.item.badgeText}</div>}
            <img 
                src={`../images/${props.item.coverImg}`} 
                className="card--image"
                alt={props.item.title} 
                onClick={handleCardClick}
            />
            <div className="card--stats">
                <img src="../images/star.png" className="card--star" alt=""/>
                <span>{props.item.stats.rating}</span>
                <span className="gray">({props.item.comments.length}) • </span>
                <span className="gray">{props.item.location}</span>
            </div>
            <p className="card--title">{props.item.title}</p>
            <p className="card--price">
                <span className="bold">From ${props.item.price}</span> / person
            </p>
        </div>
    );
}
