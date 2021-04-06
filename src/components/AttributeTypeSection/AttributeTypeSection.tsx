import React from 'react';
import { AttributeTypeItem } from '../AttributeTypeItem/AttributeTypeItem';
import './AttributeTypeSection.css';

interface AttributeTypeSectionProps {
    itemList: { itemId: number, value: string, url: string, checked: boolean }[];
    subtitle: string;
    onEditAttributeType: (newType: string) => void;
}

export const AttributeTypeSection: React.FC<AttributeTypeSectionProps> = ({ itemList, subtitle, onEditAttributeType }) => {
    return (
        <section className="AttributeTypeSection">
            <h3 className="AttributeTypeSection__title">{subtitle}</h3>
            <div className="AttributeTypeSection__items">
                {itemList.map(({ itemId, value, url, checked }) => {
                    const intermediateEditType = () => {
                        onEditAttributeType(value);
                    }
                    return <AttributeTypeItem key={itemId} value={value} url={url} checked={checked} onEditAttributeType={intermediateEditType} />
                })}
            </div>
        </section>
    )
}