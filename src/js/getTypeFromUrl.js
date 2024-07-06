const getTypeFromUrl = (url) => {
    if (url.includes("people")) return "people";
    if (url.includes("vehicles")) return "vehicles";
    if (url.includes("planets")) return "planets";
    return null;
};

export default getTypeFromUrl;
