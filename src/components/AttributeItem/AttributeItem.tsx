import React from 'react';
import { getAttributeSrcFromValue } from '../../utils/getAttributeSrcFromValue';
import './AttributeItem.css'

interface AttributeItemProps {
    value: string;
    checked: boolean;
    onChangeCurrentAttribute: () => void;
}

export const AttributeItem:React.FC<AttributeItemProps> = ({ value, checked, onChangeCurrentAttribute }) => {
    const imageSrc = getAttributeSrcFromValue(value);

    return(
        <div className={`AttributeItem${checked ? " AttributeItem--selected" : ""}`} onClick={onChangeCurrentAttribute}>
            <img className={`AttributeItem__image`} src={imageSrc} alt="" />
        </div>
    )
}