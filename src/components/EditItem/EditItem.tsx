import React from 'react';
import { getCheckedImageSrc } from '../../utils/getCheckedImageSrc';
import { getTypeSrcFromValue } from '../../utils/getTypeSrcFromValue';
import './EditItem.css';

interface EditItemProps {
    value: string;
    checked: boolean;
    onEditAttributeType: () => void;
}

export const EditItem: React.FC<EditItemProps> = ({ value, checked, onEditAttributeType }) => {
    const imageSrc = getTypeSrcFromValue(value);
    const checkedSrc = getCheckedImageSrc();

    return (
        <div className="EditItem" onClick={onEditAttributeType}>
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check${checked ? '' : ' EditItem__check--remove'}`} src={checkedSrc} alt="" />
        </div>
    )
}