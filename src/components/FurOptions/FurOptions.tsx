import React from 'react';
import { ColorItemType } from '../../utils/ColorItemType';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeColorSection } from '../AttributeColorSection/AttributeColorSection';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';

interface FurOptionsProps {
    typeList: TypeItemType[];
    colorList?: ColorItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
}

export const FurOptions: React.FC<FurOptionsProps> = ({ typeList, colorList, onEditAttributeType, onEditAttributeColor }) => {
    if (colorList) {
        return (
            <section>
                <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
                <AttributeColorSection colorList={colorList} onEditAttributeColor={onEditAttributeColor} />
            </section>
        )
    }
    return (
        <section>
            <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}