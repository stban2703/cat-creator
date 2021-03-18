import React from 'react';
import { ColorItem } from '../ColorItem/ColorItem';
import './ColorSection.css';

interface ColorSectionProps {
    colorList: { id: number, value: string, checked: boolean }[];
    onEditAttributeColor: (newColor: string) => void;
}

export const ColorSection: React.FC<ColorSectionProps> = ({ colorList, onEditAttributeColor }) => {
    return(
        <section className="ColorSection">
            <h3 className="ColorSection__title">Color</h3>
            <div className="ColorSection__items">
                {colorList.map(({ id, value, checked}) => {
                    const intermediateEditColor = () => {
                        onEditAttributeColor(value);
                    }
                    return <ColorItem key={id} value={value} checked={checked} onEditAttributeColor={intermediateEditColor} />
                })}
            </div>
        </section>
    )
}