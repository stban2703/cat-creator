import React from 'react';
import { ColorItem } from '../ColorItem/ColorItem';

interface ColorSectionProps {
    colorList: { id: number, value: string, checked: boolean }[];
}

export const ColorSection: React.FC<ColorSectionProps> = ({ colorList }) => {
    return(
        <section className="colorSection">
            <h3 className="colorListTitle">Color</h3>
            <div className="colorSection_items">
                {colorList.map(({ id, value, checked}) => {
                    return <ColorItem key={id} value={value} checked={checked} />
                })}
            </div>
        </section>
    )
}