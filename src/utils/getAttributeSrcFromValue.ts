const baseAttributeUrl = 'cat-creator/images/attributes/'
const altBaseAttributeUrl = 'images/attributes/'

export const getAttributeSrcFromValue = (value: string) => {
    return `${process.env.PUBLIC_URL}/images/attributes/${value}.svg`;
}