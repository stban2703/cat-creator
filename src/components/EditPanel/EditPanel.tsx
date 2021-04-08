import React from 'react';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import { AttributeSelection } from '../AttributeSelection/AttributeSelection';
import { AttributeOptions } from '../AttributeOptions/AttributeOptions';
import './EditPanel.css';
import { CatControl } from '../CatControl/CatControl';
import { CatPropsType } from '../../utils/CatPropsType';

interface EditPanelProps {
    catProps: CatPropsType;
    attributeOptions: AttributeOptionType[];
    currentAttribute: string;
    onEditCatName: (newName: string) => void;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (colorFill: string, colorStroke: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
    onSaveCat: (id: string, elem: CatPropsType) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ catProps, attributeOptions, currentAttribute, onEditCatName, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute, onSaveCat }) => {

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
            <CatControl catProps={catProps} attributeOptions={attributeOptions} onEditCatName={onEditCatName} onSaveCat={onSaveCat} />
        </article>
    )
}