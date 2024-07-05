import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Card = ({ uid, name, detail1, detail2, detail3, image }) => {
    const { store, actions } = useContext(Context);

    const isFavorite = store.favorites.some(fav => fav.uid === uid);

    const handleFavoriteClick = () => {
        if (isFavorite) {
            actions.removeFavorite({ uid, name });
        } else {
            actions.addFavorite({ uid, name });
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
                <button onClick={handleFavoriteClick} className={`btn ${isFavorite ? 'btn-danger' : 'btn-outline-primary'}`}>
                    {isFavorite ? '❤️' : '🤍'}
                </button>
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
};




// import React from 'react';

// export const Card = ({ name, gender, hair_color, eye_color, model, manufacturer, climate, terrain }) => {
//     return (
//         <div className="card" style={{ width: '18rem' }}>
//             <img src="" className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 {gender && <p className="card-text">Gender: {gender}</p>}
//                 {hair_color && <p className="card-text">Hair Color: {hair_color}</p>}
//                 {eye_color && <p className="card-text">Eye Color: {eye_color}</p>}
//                 {model && <p className="card-text">Model: {model}</p>}
//                 {manufacturer && <p className="card-text">Manufacturer: {manufacturer}</p>}
//                 {climate && <p className="card-text">Climate: {climate}</p>}
//                 {terrain && <p className="card-text">Terrain: {terrain}</p>}
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     );
// };








// import React from 'react';

// export const Card = ({ name, gender, hair_color, eye_color }) => {
//     return (
//         <div className="card" style={{ width: '18rem' }}>
//             <img src="" className="card-img-top" alt="..." />
//             <div className="card-body">
//                 <h5 className="card-title">{name}</h5>
//                 <p className="card-text">{gender}</p>
//                 <p className="card-text">{hair_color}</p>
//                 <p className="card-text">{eye_color}</p>
//                 <a href="#" className="btn btn-primary">Go somewhere</a>
//             </div>
//         </div>
//     );
// };
