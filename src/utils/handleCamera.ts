export const handleCamera = (currentAttribute: string) => {
    switch (currentAttribute) {
        default:
            return "";
        case "eyes":
            return "CatView__model--eyes";
        case "necklace":
            return "CatView__model--necklace"
        case "hat":
            return "CatView__model--hat"
    }
}