import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './AttributeTypeItem.css';

interface AttributeTypeItemProps {
    value: string;
    checked: boolean;
    url: string;
    onEditAttributeType: () => void;
}

export const AttributeTypeItem: React.FC<AttributeTypeItemProps> = ({ value, url, checked, onEditAttributeType }) => {
    const imageSrc = getImageSrcFromUrl(url);
    const checkedSrc = getImageSrcFromUrl("items/checked");

    return (
        <div className="AttributeTypeItem" onClick={onEditAttributeType}>
            <img className="AttributeTypeItem__image" src={imageSrc} alt="" />
            <img className={`AttributeTypeItem__check${checked ? '' : ' AttributeTypeItem__check--remove'}`} src={checkedSrc} alt="" />
        </div>
    )
}