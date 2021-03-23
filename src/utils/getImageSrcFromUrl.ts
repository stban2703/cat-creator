const baseUrl = `${process.env.PUBLIC_URL}/images/`

export const getImageSrcFromUrl = (url: string) => {
    if (url.includes("blank")) {
        return undefined;
    } else return `${baseUrl}${url}.svg`;
}