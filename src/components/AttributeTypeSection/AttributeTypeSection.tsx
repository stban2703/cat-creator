import React from 'react';
import { useParams } from 'react-router';
import { AttributeTypeItem } from '../AttributeTypeItem/AttributeTypeItem';
import './AttributeTypeSection.css';

interface AttributeTypeSectionProps {
    itemList: { itemId: number, value: string, url: string, checked: boolean }[];
    subtitle: string;
    onEditAttributeType: (id: string, newType: string) => void;
}

export const AttributeTypeSection: React.FC<AttributeTypeSectionProps> = ({ itemList, subtitle, onEditAttributeType }) => {
    const { id } = useParams<{ id: string }>();
    return (
        <section className="AttributeTypeSection">
            <h3 className="AttributeTypeSection__title">{subtitle}</h3>
            <div className="AttributeTypeSection__items">
                {itemList.map(({ itemId, value, url, checked }) => {
                    const intermediateEditType = () => {
                        onEditAttributeType(id, value);
                    }
                    return <AttributeTypeItem key={itemId} value={value} url={url} checked={checked} onEditAttributeType={intermediateEditType} />
                })}
            </div>
        </section>
    )
}