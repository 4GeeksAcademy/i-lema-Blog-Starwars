import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store } = useContext(Context);
    const { type, uid } = useParams();
    const [item, setItem] = useState(null);
    const [image, setImage] = useState("");

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                const data = await response.json();
                let itemData = data.result.properties;

                // Filtrar campos vacíos y no deseados
                itemData = Object.fromEntries(Object.entries(itemData).filter(([key, value]) => 
                    value && value.length > 0 && !["created", "edited", "url"].includes(key)
                ));

                // Si es un personaje, obtener el nombre del planeta
                if (type === "people" && itemData.homeworld) {
                    const homeworldResponse = await fetch(itemData.homeworld);
                    const homeworldData = await homeworldResponse.json();
                    itemData.homeworld = homeworldData.result.properties.name;
                }

                setItem(itemData);
            } catch (error) {
                console.error(error);
            }
        };

        const fetchImage = () => {
            let imageUrl = "";
            if (type === "people") {
                imageUrl = `https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`;
            } else if (type === "vehicles") {
                imageUrl = `https://starwars-visualguide.com/assets/img/vehicles/${uid}.jpg`;
            } else if (type === "planets") {
                imageUrl = uid === "1"
                    ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png'
                    : `https://starwars-visualguide.com/assets/img/planets/${uid}.jpg`;
            }
            setImage(imageUrl);
        };

        fetchDetails();
        fetchImage();
    }, [type, uid]);

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    };

    if (!item) {
        return <div><h1 className="text-light d-flex justify-content-center">Loading...</h1></div>;
    }

    return (
        <div className="container my-4">
            <div className="d-flex justify-content-center">
                <div className="d-flex justify_content-center align-items-center">
                    <img src={image} alt={item.name} className="img-fluid" />
                </div>
                <div className="bg-dark ms-3 p-3">
                    <h1 className="display-4 text-light d-flex justify-content-center">{item.name}</h1>                
                    <hr className="my-4 border-light" />
                    <ul>
                        {Object.keys(item).map(key => (
                            key !== "name" && (
                                <li className="text-light" key={key}>
                                    {capitalizeFirstLetter(key)}: {item[key]}
                                </li>
                            )
                        ))}
                    </ul>
                </div>                
            </div>
        </div>
    );
};