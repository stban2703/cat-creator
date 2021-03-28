import React from 'react';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';

interface HatOptionsProps {
    typeList: TypeItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
}

export const HatOptions: React.FC<HatOptionsProps> = ({typeList, onEditAttributeType, onEditAttributeColor}) => {
    return (
        <section>
            <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}