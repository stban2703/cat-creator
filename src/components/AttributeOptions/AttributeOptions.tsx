import React from 'react';
import { getColorListFromAttribute } from '../../utils/getColorListFromAttribute';
import { getSubtitleFromAttribute } from '../../utils/getSubtitleFromAttribute';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeColorSection } from '../AttributeColorSection/AttributeColorSection';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';
import "./AttributeOptions.css";

interface AttributeOptionsProps {
    currentAttribute: string;
    itemList: TypeItemType[];
    onEditAttributeType: (id: string, newType: string) => void;
    onEditAttributeColor: (id: string, colorFill: string, colorStroke: string) => void;
}

export const AttributeOptions: React.FC<AttributeOptionsProps> = ({ currentAttribute, itemList, onEditAttributeType, onEditAttributeColor }) => {
    const title = getTitleFromAttribute(currentAttribute);
    const subtitle = getSubtitleFromAttribute(currentAttribute);
    const colorList = getColorListFromAttribute(currentAttribute);

    switch (currentAttribute) {
        case "scene":
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>

                </section>
            )

        default:
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <AttributeTypeSection itemList={itemList} subtitle={subtitle!} onEditAttributeType={onEditAttributeType} />
                    <AttributeColorSection colorList={colorList} onEditAttributeColor={onEditAttributeColor} />
                </section>
            )
    }
}