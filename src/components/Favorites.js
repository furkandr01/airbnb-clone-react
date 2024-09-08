import React from "react";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
    const navigate = useNavigate();
    const [favorites, setFavorites] = React.useState(JSON.parse(localStorage.getItem("favorites")) || []);

    const handleRemoveFavorite = (id) => {
        const updatedFavorites = favorites.filter(item => item.id !== id);
        setFavorites(updatedFavorites);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    };

    const handleCardClick = (id) => {
        navigate(`/listings/${id}`); 
    };

    return (
        <div>
            <h2>Favoriler</h2>
            {favorites.length === 0 ? (
                <p>Henüz favorilere eklenmiş ilan yok.</p>
            ) : (
                <div className="favorites-list">
                    {favorites.map((item) => (
                        <div key={item.id} className="favorite-card">
                            <img 
                                src={`../images/${item.coverImg}`} 
                                alt={item.title} 
                                className="favorite-card-image"
                                onClick={() => handleCardClick(item.id)} 
                            />
                            <div className="favorite-card-info">
                                    <p className="card-favorite-title">{item.title}</p>    
                                <span className="favorite-card-price">Fiyat: ${item.price} / <span className="favorite-card-rating"> 
                                    <img src="../images/star.png" className="card--star" alt=""/>
                                    {item.stats.rating}</span></span>
                                <button onClick={() => handleRemoveFavorite(item.id)}>Sil</button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favorites;
