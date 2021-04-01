import React from 'react';
import { getSubtitleFromAttribute } from '../../utils/getSubtitleFromAttribute';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeColorSection } from '../AttributeColorSection/AttributeColorSection';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';
import "./AttributeOptions.css";

interface AttributeOptionsProps {
    currentAttribute: string;
    itemList: TypeItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (colorFill: string, colorStroke: string) => void;
}

export const AttributeOptions: React.FC<AttributeOptionsProps> = ({ currentAttribute, itemList, onEditAttributeType, onEditAttributeColor }) => {

    const title = getTitleFromAttribute(currentAttribute);

    const subtitle = getSubtitleFromAttribute(currentAttribute);

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
                    <AttributeTypeSection itemList={itemList} subtitle={subtitle!} onEditAttributeType={onEditAttributeType}/>
                    <AttributeColorSection onEditAttributeColor={onEditAttributeColor}/>
                </section>
            )
    }
}