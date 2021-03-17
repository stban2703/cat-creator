import React from 'react';
import { AttributeSelection } from '../AttributeSelection/AttributeSelection';
import { EditOptions } from '../EditOptions/EditOptions';
import './EditPanel.css';

interface EditPanelProps {
    attributeList: { id: number, attribute: string, checked: boolean, itemList: { id: number, value: string, checked: boolean }[]; }[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ attributeList, currentAttribute, onEditAttributeType, onChangeCurrentAttribute }) => {

    const getItemListFromAttribute = (newAttribute: string) => {
        const copy = attributeList.slice();
        const index = copy.findIndex((elem) => {
            return elem.attribute === newAttribute;
        })
        const newItemList = attributeList[index].itemList;
        return newItemList;
    };

    const itemList = getItemListFromAttribute(currentAttribute);

    return (
        <article className="EditPanel">
            <AttributeSelection attributeList={attributeList} onChangeCurrentAttribute={onChangeCurrentAttribute} />
            <EditOptions currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} itemList={itemList} />
        </article>
    )
}