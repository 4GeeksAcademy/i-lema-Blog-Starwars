// src/js/views/home.js
import React, { useContext, useEffect } from "react";
import "../../styles/home.css";
import { Card } from "../component/Card";
import { Context } from "../store/appContext";

export const Home = () => {
    const { store, actions } = useContext(Context);

    useEffect(() => {
        actions.loadSomeData();
    }, []);

    return (
        <>
            <div className="d-flex justify-content-center row">
                {store.characters.map(character => (
                    <Card 
                        key={character.uid} 
                        uid={character.uid}
                        name={character.name} 
                        detail1={`Gender: ${character.gender}`} 
                        detail2={`Hair Color: ${character.hair_color}`}
                        detail3={`Eye Color: ${character.eye_color}`} 
                        image={character.image} 
                    />
                ))}
                {store.vehicles.map(vehicle => (
                    <Card 
                        key={vehicle.uid} 
                        uid={vehicle.uid}
                        name={vehicle.name} 
                        detail1={`Model: ${vehicle.model}`} 
                        detail2={`Manufacturer: ${vehicle.manufacturer}`} 
                        image={vehicle.image} 
                    />
                ))}
                {store.planets.map(planet => (
                    <Card 
                        key={planet.uid} 
                        uid={planet.uid}
                        name={planet.name} 
                        detail1={`Climate: ${planet.climate}`} 
                        detail2={`Terrain: ${planet.terrain}`} 
                        image={planet.image} 
                    />
                ))}
            </div>
        </>
    );
};




// import React, { useEffect, useState } from "react";
// import "../../styles/home.css";
// import { Card } from "../component/Card";

// export const Home = () => {
//     const [data, setData] = useState({
//         characters: [],
//         vehicles: [],
//         planets: [],
//     });
//     const [error, setError] = useState(null);

//     const fetchData = async (url, key) => {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Failed to load ${key}`);
//             const data = await response.json();
//             return data.results;
//         } catch (error) {
//             setError(error.message);
//             console.log(error);
//             return [];
//         }
//     };

//     const fetchDetails = async (url) => {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Failed to load details`);
//             const data = await response.json();
//             return data.result.properties;
//         } catch (error) {
//             setError(error.message);
//             console.log(error);
//             return null;
//         }
//     };

//     useEffect(() => {
//         const getData = async () => {
//             const [characters, vehicles, planets] = await Promise.all([
//                 fetchData("https://www.swapi.tech/api/people/", "characters"),
//                 fetchData("https://www.swapi.tech/api/vehicles/", "vehicles"),
//                 fetchData("https://www.swapi.tech/api/planets/", "planets"),
//             ]);

//             const characterDetails = await Promise.all(characters.map(async (character) => {
//                 const details = await fetchDetails(character.url);
//                 return { ...character, ...details };
//             }));

//             const vehicleDetails = await Promise.all(vehicles.map(async (vehicle) => {
//                 const details = await fetchDetails(vehicle.url);
//                 return { ...vehicle, ...details };
//             }));

//             const planetDetails = await Promise.all(planets.map(async (planet) => {
//                 const details = await fetchDetails(planet.url);
//                 return { ...planet, ...details };
//             }));

//             setData({
//                 characters: characterDetails,
//                 vehicles: vehicleDetails,
//                 planets: planetDetails,
//             });
//         };

//         getData();
//     }, []);

//     return (
//         <div className="d-flex justify-content-center row">
//             {data.characters.map(character => (
//                 <Card 
//                     key={character.uid} 
//                     name={character.name} 
//                     gender={character.gender} 
//                     hair_color={character.hair_color} 
//                     eye_color={character.eye_color} 
//                 />
//             ))}
//             {data.vehicles.map(vehicle => (
//                 <Card 
//                     key={vehicle.uid} 
//                     name={vehicle.name} 
//                     model={vehicle.model} 
//                     manufacturer={vehicle.manufacturer} 
//                 />
//             ))}
//             {data.planets.map(planet => (
//                 <Card 
//                     key={planet.uid} 
//                     name={planet.name} 
//                     climate={planet.climate} 
//                     terrain={planet.terrain} 
//                 />
//             ))}
//         </div>
//     );
// };







// import React, { useEffect, useState } from "react";
// import "../../styles/home.css";
// import { Card } from "../component/Card";

// export const Home = () => {
//     const [data, setData] = useState({
//         characters: [],
//         vehicles: [],
//         planets: [],
//     });
//     const [error, setError] = useState(null);

//     const fetchData = async (url, key) => {
//         try {
//             const response = await fetch(url);
//             if (!response.ok) throw new Error(`Failed to load ${key}`);
//             const data = await response.json();
//             console.log(`Data for ${key}:`, data.results); // Añadir este log
//             return data.results;
//         } catch (error) {
//             setError(error.message);
//             console.log(error);
//         }
//     };
    

//     useEffect(() => {
//         const getData = async () => {
//             const [characters, vehicles, planets] = await Promise.all([
//                 fetchData("https://www.swapi.tech/api/people/", "characters"),
//                 fetchData("https://www.swapi.tech/api/vehicles/", "vehicles"),
//                 fetchData("https://www.swapi.tech/api/planets/", "planets"),
//             ]);

//             setData({
//                 characters: characters || [],
//                 vehicles: vehicles || [],
//                 planets: planets || [],
//             });
//         };

//         getData();
//     }, []);

//     return (
//         <div className="d-flex justify-content-center row">
//             {data.characters.map(character => (
//                 <Card key={character.uid} name={character.name} gender={character.gender} hair_color={character.hair_color} eye_color={character.eye_color} />
//             ))}
//             {data.vehicles.map(vehicle => (
//                 <Card key={vehicle.uid} name={vehicle.name} model={vehicle.model} manufacturer={vehicle.manufacturer} />
//             ))}
//             {data.planets.map(planet => (
//                 <Card key={planet.uid} name={planet.name} climate={planet.climate} terrain={planet.terrain} />
//             ))}
//         </div>
//     );
// };
