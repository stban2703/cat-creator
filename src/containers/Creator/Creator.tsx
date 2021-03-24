import React from 'react';
//import { useParams } from 'react-router';
import { CatView } from '../../components/CatView/CatView';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { AttributeType } from '../../utils/AttributeType';
import { CatPropType } from '../../utils/CatPropType';
import './Creator.css';

interface CreatorProps {
    catProps: CatPropType;
    attributeList: AttributeType[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catProps, attributeList, currentAttribute, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {

    //const { id } = useParams<{ id: string }>();

    return (
        <article className="Creator">
            <CatView catProps={catProps} />
            <EditPanel attributeList={attributeList} currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} onChangeCurrentAttribute={onChangeCurrentAttribute} />
        </article>
    )
}