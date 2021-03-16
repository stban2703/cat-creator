import React, { useState } from 'react';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { getTypeListByAttribute } from '../../utils/getTypeListByAttribute';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
    //onEditAttributeType: (attribute: string, type: string) => void;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentAttribute }) => {
    const typeList = getTypeListByAttribute(currentAttribute);
    const title = getTitleFromAttribute(currentAttribute);

    return (
        <article className="EditOptions">
            <h2 className="EditOptions__title">{title}</h2>
            <EditSection currentAttribute={currentAttribute} itemList={typeList}/>
        </article>
    )
}