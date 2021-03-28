import React from 'react';
import { ColorItemType } from '../../utils/ColorItemType';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { TypeItemType } from '../../utils/TypeItemType';
import { EyeOptions } from '../EyesOptions/EyesOptions';
import { FurOptions } from '../FurOptions/FurOptions';
import { HatOptions } from '../HatOptions/HatOptions';
import { NecklaceOptions } from '../NecklaceOptions/NecklaceOptions';
import "./AttributeOptions.css";

interface AttributeOptionsProps {
    currentAttribute: string;
    itemList: TypeItemType[];
    colorList: ColorItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
}

export const AttributeOptions: React.FC<AttributeOptionsProps> = ({ currentAttribute, itemList, colorList, onEditAttributeType, onEditAttributeColor }) => {

    const title = getTitleFromAttribute(currentAttribute);

    switch (currentAttribute) {
        case "fur":
        default:
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <FurOptions typeList={itemList} colorList={colorList} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} />
                </section>
            )

        case "eyes":
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <EyeOptions typeList={itemList} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} />
                </section>
            )

        case "necklace":
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <NecklaceOptions typeList={itemList} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} />
                </section>
            )

        case "hat":
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <HatOptions typeList={itemList} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} />
                </section>
            )
    }
}