import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { getColorListFromAttribute } from '../../utils/getColorListFromAttribute';
import { getSubtitleFromAttribute } from '../../utils/getSubtitleFromAttribute';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeColorSection } from '../AttributeColorSection/AttributeColorSection';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';
import { FilterSection } from '../FilterSection/FilterSection';
import "./AttributeOptions.css";

interface AttributeOptionsProps {
    catProps: CatPropsType;
    currentAttribute: string;
    itemList: TypeItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (colorFill: string, colorStroke: string) => void;
    onChangeFilter: (value: string) => void;
}

export const AttributeOptions: React.FC<AttributeOptionsProps> = ({ catProps, currentAttribute, itemList, onEditAttributeType, onEditAttributeColor, onChangeFilter }) => {
    const title = getTitleFromAttribute(currentAttribute);
    const subtitle = getSubtitleFromAttribute(currentAttribute);
    const colorList = getColorListFromAttribute(currentAttribute);

    switch (currentAttribute) {
        case "scene":
            return (
                <section className="AttributeOptions">
                    <h2 className="AttributeOptions__title">{title}</h2>
                    <AttributeTypeSection itemList={itemList} subtitle={subtitle!} onEditAttributeType={onEditAttributeType} />
                    <FilterSection catFilter={catProps.filter} onChangeFilter={onChangeFilter} />
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