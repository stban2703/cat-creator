import React from 'react';
import { AttributeType } from '../../utils/AttributeType';
import { AttributeItem } from '../AttributeItem/AttributeItem';
import './AttributeSelection.css';

interface AttributeSelectionProps {
    attributeList: AttributeType[];
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