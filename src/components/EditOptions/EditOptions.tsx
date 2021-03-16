import React from 'react';
import { getTitleFromAttribute } from '../../utils/getTitleFromAttribute';
import { getTypeListByAttribute } from '../../utils/getTypeListByAttribute';
import { EditSection } from '../EditSection/EditSection';
import "./EditOptions.css";

interface EditOptionsProps {
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
}

export const EditOptions: React.FC<EditOptionsProps> = ({ currentAttribute, onEditAttributeType }) => {
    const typeList = getTypeListByAttribute(currentAttribute);
    const title = getTitleFromAttribute(currentAttribute);

    return (
        <section className="EditOptions">
            <h2 className="EditOptions__title">{title}</h2>
            <EditSection itemList={typeList} onEditAttributeType={onEditAttributeType} />
        </section>
    )
}