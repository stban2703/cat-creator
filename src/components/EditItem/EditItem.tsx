import React from 'react';
import { getImageSrcFromValue } from '../../utils/getImageSrcFromValue';
import './EditItem.css';

interface EditItemProps {
    value: string;
    checked: boolean;
}

export const EditItem: React.FC<EditItemProps> = ({ value, checked }) => {
    const imageSrc = getImageSrcFromValue(value);
    return (
        <div className="EditItem">
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check ${checked ? '' : 'EditItem__check--remove'}`} src="images/items/checked.svg" alt="" />
        </div>
    )
}