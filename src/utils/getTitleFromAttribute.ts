export const getTitleFromAttribute = (attribute: string) => {
    switch (attribute) {
        case "fur":
            return "Pelaje";

        case "eyes":
            return "Ojos";

        case "necklace":
            return "Collar";

        case "hat":
            return "Sombrero";

        case "scene":
            return "Escenario";
    }
}