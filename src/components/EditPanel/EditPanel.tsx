import React from 'react';
import { AttributeType } from '../../utils/AttributeType';
import { AttributeSelection } from '../AttributeSelection/AttributeSelection';
import { EditOptions } from '../EditOptions/EditOptions';
import './EditPanel.css';

interface EditPanelProps {
    attributeList: AttributeType[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ attributeList, currentAttribute, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {

    const getItemListFromAttribute = (newAttribute: string) => {
        const copy = attributeList.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === newAttribute;
        })
        const newItemList = attributeList[index].itemList;
        return newItemList;
    };

    const getColorListFromAttribute = (newAttribute: string) => {
        const copy = attributeList.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === newAttribute;
        })
        const newColorList = attributeList[index].colorList;
        return newColorList;
    }

    const itemList = getItemListFromAttribute(currentAttribute);
    const colorList = getColorListFromAttribute(currentAttribute);

    return (
        <article className="EditPanel">
            <AttributeSelection attributeList={attributeList} onChangeCurrentAttribute={onChangeCurrentAttribute} />
            <EditOptions currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} itemList={itemList} colorList={colorList} />
        </article>
    )
}