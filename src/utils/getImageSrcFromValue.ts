const baseItemUrl = 'images/items/'

export const getImageSrcFromValue = (value: string) => {
    if(value === "blank") {
        return undefined;
    } else return `${baseItemUrl}${value}.svg`;
}