import React from 'react';
import { ColorType } from '../../utils/ColorType';
import { ColorItem } from '../ColorItem/ColorItem';
import './ColorSection.css';

interface ColorSectionProps {
    colorList: ColorType[];
    onEditAttributeColor: (newColor: string) => void;
}

export const ColorSection: React.FC<ColorSectionProps> = ({ colorList, onEditAttributeColor }) => {
    return(
        <section className="ColorSection">
            <h3 className="ColorSection__title">Color</h3>
            <div className="ColorSection__items">
                {colorList.map(({ id, fill, checked}) => {
                    const intermediateEditColor = () => {
                        onEditAttributeColor(fill);
                    }
                    return <ColorItem key={id} value={fill} checked={checked} onEditAttributeColor={intermediateEditColor} />
                })}
            </div>
        </section>
    )
}