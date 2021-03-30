import React from 'react';
import { TypeItemType } from '../../utils/TypeItemType';
import { AttributeTypeSection } from '../AttributeTypeSection/AttributeTypeSection';

interface FurOptionsProps {
    typeList: TypeItemType[];
    onEditAttributeType: (newType: string) => void
}

export const FurOptions: React.FC<FurOptionsProps> = ({ typeList, onEditAttributeType }) => {
    return (
        <section>
            <AttributeTypeSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}