import React, { useState } from 'react';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
}

const furTypes = [
    {
        id: 0,
        value: "noPattern",
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

/*const eyeType = [

]

const necklaceType = [
    
]

const hatType = [

]

const sceneType = [

]*/

export const EditOptions: React.FC<EditOptionsProps> = ({ currentAttribute }) => {
    const [list, setList] = useState(furTypes)
    const title = getTitleFromAttribute(currentAttribute)
    return (
        <article className="EditOptions">
            <h2 className="EditOptions__title">{title}</h2>
            <EditSection itemList={list}/>
        </article>
    )
}