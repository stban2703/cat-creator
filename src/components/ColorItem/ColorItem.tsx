import React from 'react';

interface ColorItemProps {
    value: string;
    checked: boolean;
}

export const ColorItem: React.FC<ColorItemProps> = ({ value, checked }) => {
    return (
        <div className="ColorItem" style={ {backgroundColor: value} }>
            <img src="images/items/checked.svg" alt=""/>
        </div>
    )
}