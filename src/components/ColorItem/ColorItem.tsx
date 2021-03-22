import React from 'react';
import { getCheckedImageSrc } from '../../utils/getCheckedImageSrc';
import './ColorItem.css';

interface ColorItemProps {
    value: string;
    checked: boolean;
    onEditAttributeColor: () => void;
}

export const ColorItem: React.FC<ColorItemProps> = ({ value, checked, onEditAttributeColor }) => {
    const checkedSrc = getCheckedImageSrc();
    return (
        <div className="ColorItem" style={ {backgroundColor: value} } onClick={onEditAttributeColor}>
            <img className={`ColorItem__check${checked ? '' : ' ColorItem__check--remove'}`} src={checkedSrc} alt=""/>
        </div>
    )
}