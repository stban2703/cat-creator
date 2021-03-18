import React from 'react';
import './ColorItem.css';

interface ColorItemProps {
    value: string;
    checked: boolean;
}

export const ColorItem: React.FC<ColorItemProps> = ({ value, checked }) => {
    return (
        <div className="ColorItem" style={ {backgroundColor: value} }>
            <img className={`ColorItem__check${checked ? '' : ' ColorItem__check--remove'}`} src="images/items/checked.svg" alt=""/>
        </div>
    )
}