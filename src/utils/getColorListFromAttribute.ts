export const getColorListFromAttribute = (attribute: string) => {
    switch (attribute) {
        case "fur":
        default:
            return [
                '#FFFFFF',
                '#EBEBEB',
                '#ABB8C3',
                '#8ED1FC',
                '#FF6900',
                '#FCB900',
                '#F78DA7',
                '#000000'
            ]
        case "eyes":
            return [
                '#ABB8C3',
                '#000000',
                '#0BF86A',
                '#8ED1FC',
                '#FF6900',
                '#FCB900',
                '#EB144C',
                '#F78DA7',
                '#9900EF'
            ]
    }
}