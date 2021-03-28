import React from 'react';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';

interface NecklaceOptionsProps {
    typeList: TypeItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
}

export const NecklaceOptions: React.FC<NecklaceOptionsProps> = ({ typeList, onEditAttributeType, onEditAttributeColor }) => {
    return (
        <section>
            <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}