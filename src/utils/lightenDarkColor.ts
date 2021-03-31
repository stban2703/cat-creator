export const lightenDarkenColor = (color: string, amt: number) => {
    // https://css-tricks.com/snippets/javascript/lighten-darken-color/
    let usePound = false;
    if (color[0] === "#") {
        color = color.slice(1);
        usePound = true;
    }
    let num = parseInt(color, 16);
    let r = (num >> 16) + amt;
    if (r > 255) r = 255;
    else if (r < 0) r = 0;
    let b = ((num >> 8) & 0x00FF) + amt;
    if (b > 255) b = 255;
    else if (b < 0) b = 0;
    let g = (num & 0x0000FF) + amt;
    if (g > 255) g = 255;
    else if (g < 0) g = 0;

    // https://stackoverflow.com/questions/12043187/how-to-check-if-hex-color-is-too-black
    let luma = 0.2126 * r + 0.7152 * g + 0.0722 * b;

    if (luma < 30) {
        let num = parseInt(color, 16);
        let r = (num >> 16) + 80;
        if (r > 255) r = 255;
        else if (r < 0) r = 0;
        let b = ((num >> 8) & 0x00FF) + 80;
        if (b > 255) b = 255;
        else if (b < 0) b = 0;
        let g = (num & 0x0000FF) + 80;
        if (g > 255) g = 255;
        else if (g < 0) g = 0;
        return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
    }
    return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}