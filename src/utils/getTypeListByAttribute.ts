const furTypes = [
    {
        id: 0,
        value: "blank",
        checked: true
    },
    {
        id: 1,
        value: "lines",
        checked: false
    },
    {
        id: 2,
        value: "colorAndwhite",
        checked: false
    },
    {
        id: 3,
        value: "siamese",
        checked: false
    },
    {
        id: 4,
        value: "tricolor",
        checked: false
    }
]

const eyeTypes = [
    {
        id: 0,
        value: "expanded",
        checked: true
    },
    {
        id: 1,
        value: "normal",
        checked: false
    },
    {

        id: 2,
        value: "contracted",
        checked: false

    }
]

export const getTypeListByAttribute = (attribute: string) => {
    switch (attribute) {
        case "fur":
            return furTypes;
        case "eyes":
            return eyeTypes;
        default:
            return furTypes;
    }
}