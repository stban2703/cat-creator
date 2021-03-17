import React from 'react';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
    itemList: { id: number, value: string, checked: boolean }[];
    onEditAttributeType: (newType: string) => void;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentAttribute, itemList, onEditAttributeType }) => {
    //const typeListt = getTypeListByAttribute(currentAttribute);
    const title = getTitleFromAttribute(currentAttribute);

    return (
        <section className="EditOptions">
            <h2 className="EditOptions__title">{title}</h2>
            <EditSection itemList={itemList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}