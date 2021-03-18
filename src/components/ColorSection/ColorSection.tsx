import React from 'react';
import { ColorItem } from '../ColorItem/ColorItem';
import './ColorSection.css';

interface ColorSectionProps {
    colorList: { id: number, value: string, checked: boolean }[];
}

export const ColorSection: React.FC<ColorSectionProps> = ({ colorList }) => {
    return(
        <section className="ColorSection">
            <h3 className="ColorSection__title">Color</h3>
            <div className="ColorSection__items">
                {colorList.map(({ id, value, checked}) => {
                    return <ColorItem key={id} value={value} checked={checked} />
                })}
            </div>
        </section>
    )
}