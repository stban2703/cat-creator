import React, { useState } from 'react';
import { ColorResult, TwitterPicker } from 'react-color';
import { lightenDarkenColor } from '../../utils/lightenDarkColor';
import './AttributeColorSection.css';

interface AttributeColorSectionProps {
    onEditAttributeColor: (colorFill: string, colorStroke: string) => void;
}

export const AttributeColorSection: React.FC<AttributeColorSectionProps> = ({ onEditAttributeColor }) => {

    const [color, setColor] = useState("#FFFFFF");

    const handleColor = (color: ColorResult) => {
        setColor(color.hex);
        const colorStroke = lightenDarkenColor(color.hex, -80);
        onEditAttributeColor(color.hex, colorStroke)
    };

    return (
        <section className="AttributeColorSection">
            <h3 className="AttributeColorSection__title">Color</h3>
            <TwitterPicker color={color} onChange={handleColor} colors={['#FFFFFF', '#000000', '#ABB8C3', '#0BF86A', '#8ED1FC', '#FF6900', '#FCB900', '#EB144C', '#F78DA7', '#9900EF'] } />
        </section>
    )
}