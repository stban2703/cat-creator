export const getColorListFromAttribute = (attribute: string) => {
    switch (attribute) {
        case "fur":
            return [
                '#FFFFFF',
                '#EBEBEB',
                '#ABB8C3',
                '#8ED1FC',
                '#EA9142',
                '#D4A113',
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
        case "necklace":
            return [
                '#ABB8C3',
                '#000000',
                '#67D26B',
                '#61ACF2',
                '#FF6900',
                '#FCB900',
                '#EB144C',
                '#F78DA7',
                '#9900EF'
            ]
        case "hat":
            return [
                '#ABB8C3',
                '#000000',
                '#67D26B',
                '#61ACF2',
                '#FF6900',
                '#FCB900',
                '#EB144C',
                '#F78DA7',
                '#9900EF'
            ]
    }
}