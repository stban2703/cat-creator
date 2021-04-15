export const initialCatProps = {
    id: "new",
    catName: "",
    creationDate: Date.now(),
    filter: "string",
    settings: [
        {
            id: "fur",
            type: "blank",
            fill: "#ffffff",
            stroke: "#AFAFAF"
        },
        {
            id: "eyes",
            type: "expanded",
            fill: "#0BF86A",
            stroke: "none"
        },
        {
            id: "necklace",
            type: "blank",
            fill: "#61ACF2",
            stroke: "#115ca2"
        },
        {
            id: "hat",
            type: "blank",
            fill: "#000000",
            stroke: "#505050"
        },
        {
            id: "scene",
            type: "backgrounds/room",
            fill: "none",
            stroke: "none"
        }
    ]
}