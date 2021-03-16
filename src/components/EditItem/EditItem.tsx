import React from 'react';
import { getImageSrcFromValue } from '../../utils/getImageSrcFromValue';
import './EditItem.css';

interface EditItemProps {
    property: string;
    value: string;
    checked: boolean;
}

export const EditItem: React.FC<EditItemProps> = ({ property, value, checked }) => {
    //const imageSrc = getImageSrcFromValue(name);

    /*const handleClick = () => {
        onEditAttribute(property, value);
    }*/

    return (
        <div className="EditItem">
            <img className="EditItem__image" alt="" />
            <img className={`EditItem__check ${checked ? '' : 'EditItem__check--remove'}`} src="images/items/checked.svg" alt="" />
        </div>
    )
}