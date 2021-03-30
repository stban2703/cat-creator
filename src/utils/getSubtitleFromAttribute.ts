export const getSubtitleFromAttribute = (currentAttribute: string) => {
    switch (currentAttribute) {
        case "fur":
            return "Patrón"
        case "eyes":
            return "Pupila"
        case "necklace":
            return "Accesorio"
        case "hat":
            return "Tipo"
    }
}