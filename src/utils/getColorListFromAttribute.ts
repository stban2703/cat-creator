export const getColorListFromAttribute = (attribute: string) => {
    switch (attribute) {
        case "fur":
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
        default:
            return [
                '#ABB8C3',
                '#000000',
                '#0BF86A',
                '#05F0FF',
                '#FF6900',
                '#FCB900',
                '#EB144C',
                '#F78DA7',
                '#9900EF'
            ]
    }
}