import React from 'react';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';

interface EyeOptionsProps {
    typeList: TypeItemType[];
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
}

export const EyeOptions: React.FC<EyeOptionsProps> = ({typeList, onEditAttributeType, onEditAttributeColor}) => {
    return (
        <section>
            <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}