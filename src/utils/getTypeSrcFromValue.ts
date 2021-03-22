const baseTypeUrl = 'cat-creator/images/items/'

export const getTypeSrcFromValue = (value: string) => {
    if(value === "blank") {
        return undefined;
    } else return `${baseTypeUrl}${value}.svg`;
}