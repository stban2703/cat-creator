import React from 'react';
import { ColorType } from '../../utils/ColorType';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { ItemType } from '../../utils/ItemType';
import { ColorSection } from '../ColorSection/ColorSection';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
    itemList: ItemType[];
    colorList: ColorType[];
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