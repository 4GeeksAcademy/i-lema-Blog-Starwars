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
            <div className="py-2">
                <div className="mb-5">
                    <h1 className="text-light">Characters</h1>
                    <div className="scroll-horizontal my-2">
                        <div className="horizontal-scroll my-3">
                            {store.characters.map(character => (
                                <Card 
                                    key={character.uid} 
                                    uid={character.uid}
                                    name={character.name} 
                                    detail1={`Gender: ${character.gender}`} 
                                    detail2={`Hair Color: ${character.hair_color}`}
                                    detail3={`Eye Color: ${character.eye_color}`} 
                                    image={character.image} 
                                    type="characters"
                                />
                            ))}
                        </div>
                    </div>
                </div>

                <div className="my-5">
                    <h1 className="text-light">Vehicles</h1>
                    <div className="scroll-horizontal my-2">
                        <div className="horizontal-scroll my-3">
                            {store.vehicles.map(vehicle => (
                                    <Card 
                                        key={vehicle.uid} 
                                        uid={vehicle.uid}
                                        name={vehicle.name} 
                                        detail1={`Model: ${vehicle.model}`} 
                                        detail2={`Manufacturer: ${vehicle.manufacturer}`} 
                                        image={vehicle.image} 
                                        type="vehicles"
                                    />
                                ))}
                        </div>
                    </div>
                </div>

                <div className="mt-5">
                    <h1 className="text-light">Planets</h1>
                    <div className="scroll-horizontal my-2">
                        <div className="horizontal-scroll my-3">
                            {store.planets.map(planet => (
                                <Card 
                                    key={planet.uid} 
                                    uid={planet.uid}
                                    name={planet.name} 
                                    detail1={`Climate: ${planet.climate}`} 
                                    detail2={`Terrain: ${planet.terrain}`} 
                                    image={planet.image} 
                                    type="planets"
                                />
                            ))}
                        </div>
                    </div>
                </div>
		    </div>
        </>
    );
};