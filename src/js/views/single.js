import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Single = () => {
    const { store } = useContext(Context);
    const { type, uid } = useParams();
    const [item, setItem] = useState(null);

    useEffect(() => {
        const fetchDetails = async () => {
            try {
                const response = await fetch(`https://www.swapi.tech/api/${type}/${uid}`);
                const data = await response.json();
                setItem(data.result.properties);
            } catch (error) {
                console.error(error);
            }
        };
        fetchDetails();
    }, [type, uid]);

    if (!item) {
        return <div><h1 className="text-light d-flex justify-content-center">Loading...</h1></div>;
    }

    return (
        <div className="container">
            <div className="jumbotron mt-5">
                <h1 className="display-4">{item.name}</h1>
                <hr className="my-4" />
                <ul>
                    {Object.keys(item).map(key => (
                        <li key={key}>
                            {key}: {item[key]}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};
