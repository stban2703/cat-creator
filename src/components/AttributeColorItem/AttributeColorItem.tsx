import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './AttributeColorItem.css';

interface AttributeColorItemProps {
    value: string;
    checked: boolean;
    onEditAttributeColor: () => void;
}

export const AttributeColorItem: React.FC<AttributeColorItemProps> = ({ value, checked, onEditAttributeColor }) => {
    const checkedSrc = getImageSrcFromUrl("items/checked");
    return (
        <div className="AttributeColorItem" style={ {backgroundColor: value} } onClick={onEditAttributeColor}>
            <img className={`AttributeColorItem__check${checked ? '' : ' AttributeColorItem__check--remove'}`} src={checkedSrc} alt=""/>
        </div>
    )
}