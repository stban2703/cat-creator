import React from 'react';
import { AttributeItem } from '../AttributeItem/AttributeItem';
import './AttributeSelection.css';

interface AttributeSelectionProps {
    attributeList: { id: number, attribute: string, checked: boolean }[];
}

export const AttributeSelection: React.FC<AttributeSelectionProps> = ({ attributeList }) => {
    return (
        <section className="AttributeSelection">
            {attributeList.map(({ id, attribute, checked }) => {
                return <AttributeItem key={id} value={attribute} checked={checked}/>
            })}
        </section>
    )
}