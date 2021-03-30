import React, { useState } from 'react';
import { ColorItemType } from '../../utils/ColorItemType';
import { AttributeColorItem } from '../AttributeColorItem/AttributeColorItem';
import { ColorResult, TwitterPicker } from 'react-color';
import './AttributeColorSection.css';

interface AttributeColorSectionProps {
    //colorList: ColorItemType[];
    onEditAttributeColor: (newColor: string) => void;
}

export const AttributeColorSection: React.FC<AttributeColorSectionProps> = ({ onEditAttributeColor }) => {

    const [color, setColor] = useState("#FFFFFF");

    const handleColor = (color: ColorResult) => {
        setColor(color.hex);
    };

    return (
        <section className="AttributeColorSection">
            <h3 className="AttributeColorSection__title">Color</h3>
            <TwitterPicker color={color} onChange={handleColor}/>
            {/*<div className="AttributeColorSection__items">
                {colorList.map(({ id, fill, checked}) => {
                    const intermediateEditColor = () => {
                        onEditAttributeColor(fill);
                    }
                    return <AttributeColorItem key={id} value={fill} checked={checked} onEditAttributeColor={intermediateEditColor} />
                })}
            </div> */}
        </section>
    )
}