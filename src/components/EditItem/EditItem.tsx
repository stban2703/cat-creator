import React from 'react';
import { getImageSrcFromValue } from '../../utils/getImageSrcFromValue';
import './EditItem.css';

interface EditItemProps {
    value: string;
    checked: boolean;
    onEditAttributeType: (newType: string) => void;
}

export const EditItem: React.FC<EditItemProps> = ({ value, checked, onEditAttributeType }) => {
    const imageSrc = getImageSrcFromValue(value);

    const handleClick = () => {
        onEditAttributeType(value);
    }

    return (
        <div className="EditItem" onClick={handleClick}>
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check ${checked ? '' : 'EditItem__check--remove'}`} src="images/items/checked.svg" alt="" />
        </div>
    )
}