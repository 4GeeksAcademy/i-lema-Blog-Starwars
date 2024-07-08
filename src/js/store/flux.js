const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            characters: [],
            vehicles: [],
            planets: [],
            favorites: [],
        },
        actions: {
            loadSomeData: async () => {
                const fetchData = async (url, type) => {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(`Failed to load ${type}`);
                        const data = await response.json();
                        return data.results.map(item => ({ ...item, type }));
                    } catch (error) {
                        console.error(error);
                        return [];
                    }
                };

                const fetchDetails = async (url) => {
                    try {
                        const response = await fetch(url);
                        if (!response.ok) throw new Error(`Failed to load details`);
                        const data = await response.json();
                        return data.result.properties;
                    } catch (error) {
                        console.error(error);
                        return null;
                    }
                };

                const [characters, vehicles, planets] = await Promise.all([
                    fetchData("https://www.swapi.tech/api/people/", "characters"),
                    fetchData("https://www.swapi.tech/api/vehicles/", "vehicles"),
                    fetchData("https://www.swapi.tech/api/planets/", "planets"),
                ]);

                const characterDetails = await Promise.all(characters.map(async (character) => {
                    const details = await fetchDetails(character.url);
                    const characterImage = `https://starwars-visualguide.com/assets/img/characters/${character.uid}.jpg`;
                    return { ...character, ...details, image: characterImage };
                }));

                const vehicleDetails = await Promise.all(vehicles.map(async (vehicle) => {
                    const details = await fetchDetails(vehicle.url);
                    const vehicleImage = `https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`;
                    return { ...vehicle, ...details, image: vehicleImage };
                }));

                const planetDetails = await Promise.all(planets.map(async (planet, index) => {
                    const details = await fetchDetails(planet.url);
                    const planetImage = index === 0
                        ? 'https://static.wikia.nocookie.net/esstarwars/images/b/b0/Tatooine_TPM.png'
                        : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`;
                    return { ...planet, ...details, image: planetImage };
                }));

                setStore({
                    characters: characterDetails,
                    vehicles: vehicleDetails,
                    planets: planetDetails,
                });
            },
            addFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites.some(fav => fav.uid === item.uid && fav.type === item.type)
                    ? store.favorites
                    : [...store.favorites, item];
                setStore({ favorites });
            },
            removeFavorite: (item) => {
                const store = getStore();
                const favorites = store.favorites.filter(fav => !(fav.uid === item.uid && fav.type === item.type));
                setStore({ favorites });
            },
        }
    };
};

export default getState;