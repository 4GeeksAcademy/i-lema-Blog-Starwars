import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Card = ({ uid, name, detail1, detail2, detail3, image, type }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.uid === uid && fav.type === type);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            actions.removeFavorite({ uid, name, type });
        } else {
            actions.addFavorite({ uid, name, type });
        }
    };

    return (
        <div className="card" style={{ width: "18rem" }}>
            <img src={image} className="card-img-top" alt={name} />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{detail1}</p>
                <p className="card-text">{detail2}</p>
                <p className="card-text">{detail3}</p>
                <div className="d-flex justify-content-between">
                    <Link to={`/single/${type === "characters" ? "people" : type}/${uid}`} className="btn btn-primary">Details</Link>
                    <button onClick={handleFavoriteClick} className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-primary'} ml-2`}>
                        {isFavorite ? '❤️' : '🤍'}
                    </button>
                </div>                
            </div>
        </div>
    );
};

Card.propTypes = {
    uid: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    detail1: PropTypes.string.isRequired,
    detail2: PropTypes.string.isRequired,
    detail3: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
};