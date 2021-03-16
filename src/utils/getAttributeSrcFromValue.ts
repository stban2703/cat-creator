const baseAttributeUrl = 'images/attributes/'

export const getAttributeSrcFromValue = (value: string) => {
    return `${baseAttributeUrl}${value}.svg`;
}