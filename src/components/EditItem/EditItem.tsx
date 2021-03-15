import React from 'react';
import { getImageSrcFromName } from '../../utils/getImageSrcFromName';
import './EditItem.css';

interface EditItemProps {
    name: string;
    checked: boolean;
}

export const EditItem: React.FC<EditItemProps> = ({ name, checked }) => {
    const imageSrc = getImageSrcFromName(name);
    return (
        <div className="EditItem">
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check ${checked ? '' : 'EditItem__check--remove'}`} src="images/items/checked.svg" alt="" />
        </div>
    )
}