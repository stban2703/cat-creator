import React from 'react';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import { AttributeSelection } from '../AttributeSelection/AttributeSelection';
import { AttributeOptions } from '../AttributeOptions/AttributeOptions';
import './EditPanel.css';

interface EditPanelProps {
    attributeOptions: AttributeOptionType[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ attributeOptions, currentAttribute, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {

    const getItemListFromId = (newAttribute: string) => {
        const copy = attributeOptions.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === newAttribute;
        })
        const newItemList = attributeOptions[index].itemList;
        return newItemList;
    };

    const getColorListFromId = (newAttribute: string) => {
        const copy = attributeOptions.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === newAttribute;
        })
        const newColorList = attributeOptions[index].colorList;
        return newColorList;
    }

    const itemList = getItemListFromId(currentAttribute);
    const colorList = getColorListFromId(currentAttribute);

    return (
        <article className="EditPanel">
            <AttributeSelection attributeOptions={attributeOptions} onChangeCurrentAttribute={onChangeCurrentAttribute} />
            <AttributeOptions currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} itemList={itemList} colorList={colorList} />
        </article>
    )
}