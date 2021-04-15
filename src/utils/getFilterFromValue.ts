export const getFilterFromValue = (value: string) => {
    switch (value) {
        case "grayscale":
            return "grayscale(100%);"
        case "invert":
            return "invert(100%);"
        case "sepia":
            return "sepia(100%);"
        default:
            return "none";
    }
}