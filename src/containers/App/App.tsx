import React, { useState } from 'react';
import { EditOptions } from '../../components/EditOptions/EditOptions';

const initialProps = [
    {
        attribute: "fur",
        type: "blank",
        color: "#000000"
    },
    {
        attribute: "eyes",
        type: "expanded",
        color: "#000000"
    },
    {
        attribute: "necklace",
        type: "blank",
        color: "#000000"
    },
    {
        attribute: "hat",
        type: "blank",
        color: "#000000"
    },
    {
        attribute: "scene",
        type: "blank",
        filter: "none"
    },
]

export const App = () => {
    const [catProps, setCatProps] = useState(initialProps)
    const [currentAttribute, setCurrentAttribute] = useState("fur");

    const handleCurrentAttribute = (newCurrentAttribute: string) => {
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (newType: string) => {
        const copy = catProps.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        });

        copy[index].type = newType;
        setCatProps(copy);
        console.log(catProps[index].type);
    }


    return (
        <main>
            <EditOptions currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} />
        </main>
    );
}