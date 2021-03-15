const baseItemUrl = 'images/items/'

export const getImageSrcFromValue = (value: string) => {
    if(value === "noPattern") {
        return undefined;
    } else return `${baseItemUrl}${value}.svg`;
}