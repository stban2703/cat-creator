import React from 'react';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { ColorSection } from '../ColorSection/ColorSection';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
    itemList: { id: number, value: string, checked: boolean }[];
    colorList: { id: number, value: string, checked: boolean }[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor:string) => void;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentAttribute, itemList, colorList, onEditAttributeType, onEditAttributeColor }) => {
    //const typeListt = getTypeListByAttribute(currentAttribute);
    const title = getTitleFromAttribute(currentAttribute);

    return (
        <section className="EditOptions">
            <h2 className="EditOptions__title">{title}</h2>
            <EditSection itemList={itemList} onEditAttributeType={onEditAttributeType} />
            <ColorSection colorList={colorList} onEditAttributeColor={onEditAttributeColor} />
        </section>
    )
}