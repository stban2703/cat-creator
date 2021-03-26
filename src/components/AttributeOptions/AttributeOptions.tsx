import React from 'react';
import { ColorType } from '../../utils/ColorType';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { ItemType } from '../../utils/ItemType';
import { AttributeColorSection } from '../AttributeColorSection/AttributeColorSection';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';
import "./AttributeOptions.css";

interface AttributeOptionsProps {
    currentAttribute: string;
    itemList: ItemType[];
    colorList: ColorType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor:string) => void;
}

export const AttributeOptions: React.FC<AttributeOptionsProps> = ({ currentAttribute, itemList, colorList, onEditAttributeType, onEditAttributeColor }) => {
    //const typeListt = getTypeListByAttribute(currentAttribute);
    const title = getTitleFromAttribute(currentAttribute);

    return (
        <section className="AttributeOptions">
            <h2 className="AttributeOptions__title">{title}</h2>
            <AttributeTypeSection itemList={itemList} onEditAttributeType={onEditAttributeType} />
            <AttributeColorSection colorList={colorList} onEditAttributeColor={onEditAttributeColor} />
        </section>
    )
}