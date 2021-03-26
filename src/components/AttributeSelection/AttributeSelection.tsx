import React from 'react';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import { AttributeItem } from '../AttributeItem/AttributeItem';
import './AttributeSelection.css';

interface AttributeSelectionProps {
    attributeOptions: AttributeOptionType[];
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const AttributeSelection: React.FC<AttributeSelectionProps> = ({ attributeOptions, onChangeCurrentAttribute }) => {
    return (
        <section className="AttributeSelection">
            {attributeOptions.map(({ id, url, checked }) => {
                const intermediateChangeAttribute = () => {
                    onChangeCurrentAttribute(id)
                }
                return <AttributeItem key={id} value={id} url={url} checked={checked} onChangeCurrentAttribute={intermediateChangeAttribute}/>
            })}
        </section>
    )
}