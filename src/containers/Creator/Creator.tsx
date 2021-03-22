import React from 'react';
import { CatView } from '../../components/CatView/CatView';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import './Creator.css';

interface CreatorProps {
    catProps: { attribute: string, type: string, color: string }[];
    attributeList: { id: number, attribute: string, checked: boolean, itemList: { id: number, value: string, checked: boolean }[], colorList: { id: number, value: string, checked: boolean }[] }[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catProps, attributeList, currentAttribute, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {
    return (
        <article className="Creator">
            <CatView catProps={catProps} />
            <EditPanel attributeList={attributeList} currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} onChangeCurrentAttribute={onChangeCurrentAttribute} />
        </article>
    )
}