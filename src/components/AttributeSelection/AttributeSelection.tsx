import React from 'react';
import { AttributeItem } from '../AttributeItem/AttributeItem';
import './AttributeSelection.css';

interface AttributeSelectionProps {
    attributeList: { id: number, attribute: string, checked: boolean }[];
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const AttributeSelection: React.FC<AttributeSelectionProps> = ({ attributeList, onChangeCurrentAttribute }) => {
    return (
        <section className="AttributeSelection">
            {attributeList.map(({ id, attribute, checked }) => {

                const intermediateChangeAttribute = () => {
                    onChangeCurrentAttribute(attribute)
                }

                return <AttributeItem key={id} value={attribute} checked={checked} onChangeCurrentAttribute={intermediateChangeAttribute}/>
            })}
        </section>
    )
}