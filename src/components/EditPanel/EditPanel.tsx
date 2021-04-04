import React from 'react';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import { AttributeSelection } from '../AttributeSelection/AttributeSelection';
import { AttributeOptions } from '../AttributeOptions/AttributeOptions';
import './EditPanel.css';
import { CatControl } from '../CatControl/CatControl';

interface EditPanelProps {
    catName: string;
    attributeOptions: AttributeOptionType[];
    currentAttribute: string;
    onEditCatName: (id: string,newName: string) => void;
    onEditAttributeType: (id: string,newType: string) => void;
    onEditAttributeColor: (id: string,colorFill: string, colorStroke: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
    onSaveCat: (id: string,) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ catName, attributeOptions, currentAttribute, onEditCatName, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute, onSaveCat }) => {

    const getItemListFromId = (newAttribute: string) => {
        const copy = attributeOptions.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === newAttribute;
        })
        const newItemList = attributeOptions[index].itemList;
        return newItemList;
    };

    const itemList = getItemListFromId(currentAttribute);

    return (
        <article className="EditPanel">
            <AttributeSelection attributeOptions={attributeOptions} onChangeCurrentAttribute={onChangeCurrentAttribute} />
            <AttributeOptions currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} itemList={itemList} />
            <CatControl catName={catName} onEditCatName={onEditCatName} onSaveCat={onSaveCat} />
        </article>
    )
}