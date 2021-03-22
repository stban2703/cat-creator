import React from 'react';
import './ColorItem.css';

interface ColorItemProps {
    value: string;
    checked: boolean;
    onEditAttributeColor: () => void;
}

export const ColorItem: React.FC<ColorItemProps> = ({ value, checked, onEditAttributeColor }) => {
    return (
        <div className="ColorItem" style={ {backgroundColor: value} } onClick={onEditAttributeColor}>
            <img className={`ColorItem__check${checked ? '' : ' ColorItem__check--remove'}`} src="cat-creator/images/items/checked.svg" alt=""/>
        </div>
    )
}