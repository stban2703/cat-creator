import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './EditItem.css';

interface EditItemProps {
    value: string;
    checked: boolean;
    url: string;
    onEditAttributeType: () => void;
}

export const EditItem: React.FC<EditItemProps> = ({ value, url, checked, onEditAttributeType }) => {
    const imageSrc = getImageSrcFromUrl(url);
    const checkedSrc = getImageSrcFromUrl("items/checked");

    return (
        <div className="EditItem" onClick={onEditAttributeType}>
            <img className="EditItem__image" src={imageSrc} alt="" />
            <img className={`EditItem__check${checked ? '' : ' EditItem__check--remove'}`} src={checkedSrc} alt="" />
        </div>
    )
}