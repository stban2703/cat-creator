import React from 'react';
import { getAttributeSrcFromValue } from '../../utils/getAttributeSrcFromValue';
import './AttributeItem.css'

interface AttributeItemProps {
    value: string;
}

export const AttributeItem:React.FC<AttributeItemProps> = ({ value }) => {
    const imageSrc = getAttributeSrcFromValue(value);
    return(
        <div className="AttributeItem">
            <img className="EditItem__image" src={imageSrc} alt="" />
        </div>
    )
}