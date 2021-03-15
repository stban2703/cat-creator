const baseItemUrl = 'images/items/'

export const getImageSrcFromName = (name: string) => {
    if(name === "noPattern") {
        return undefined;
    } else return `${baseItemUrl}${name}.svg`;
}