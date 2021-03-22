const baseAttributeUrl = 'cat-creator/images/attributes/'

export const getAttributeSrcFromValue = (value: string) => {
    return `${baseAttributeUrl}${value}.svg`;
}