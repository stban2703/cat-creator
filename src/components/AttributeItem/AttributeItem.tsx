import React from 'react';
import { getAttributeSrcFromValue } from '../../utils/getAttributeSrcFromValue';
import './AttributeItem.css'

interface AttributeItemProps {
    value: string;
    checked: boolean;
}

export const AttributeItem:React.FC<AttributeItemProps> = ({ value, checked }) => {
    const imageSrc = getAttributeSrcFromValue(value);
    return(
        <div className={`AttributeItem${checked ? " AttributeItem--selected" : ""}`}>
            <img className={`AttributeItem__image`} src={imageSrc} alt="" />
        </div>
    )
}