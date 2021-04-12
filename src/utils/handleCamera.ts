export const handleCamera = (currentAttribute: string) => {
    switch (currentAttribute) {
        default:
            return "";
        case "eyes":
            return "CatView--eyes";
        case "necklace":
            return "CatView--necklace"
        case "hat":
            return "CatView--hat"
    }
}