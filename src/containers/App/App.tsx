import React, { useState } from 'react';
import { EditOptions } from '../../components/EditOptions/EditOptions';

const initialProps = [
    {
        attribute: "fur",
        type: 0,
        color: "#000000"
    },
    {
        attribute: "eyes",
        type: 0,
        color: "#000000"
    },
    {
        attribute: "necklace",
        type: 0,
        color: "#000000"
    },
    {
        attribute: "hat",
        type: 0,
        color: "#000000"
    },
    {
        attribute: "scene",
        type: 0,
        filter: "none"
    },
    /*furType: "noPattern",
    currentAttribute: "fur"*/
]

export const App = () => {
    const [catProps, setCatProps] = useState(initialProps)
    const [currentAttribute, setCurrentAttribute] = useState("fur");

    /*const handleCurrentAttribute = (newCurrentAttribute: string) => {
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (selectedAttribute: string, newType: string) => {
        const copy = catProps.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === selectedAttribute;
        });

        copy[index].type = newType;
        setCatProps(copy);
        console.log(catProps[index].type);
    }*/

    /*const handleEditAttributeColor = (selectedAttribute: string, newType: string) => {

    }*/

    return (
        <main>
            <EditOptions currentAttribute={currentAttribute}/>
        </main>
    );
}