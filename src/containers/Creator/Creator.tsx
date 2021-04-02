import React from 'react';
//import { useParams } from 'react-router';
import { CatView } from '../../components/CatView/CatView';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { CatPropsType } from '../../utils/CatPropsType';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import './Creator.css';

interface CreatorProps {
    catProps: CatPropsType;
    attributeOptions: AttributeOptionType[];
    currentAttribute: string;
    onEditCatName: (newName: string) => void;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (colorFill: string, colorStroke: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catProps, attributeOptions, currentAttribute, onEditCatName, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {

    //const { id } = useParams<{ id: string }>();

    return (
        <article className="Creator">
            <CatView catProps={catProps} currentAttribute={currentAttribute} />
            <div className="Creator__empty"></div>
            <EditPanel catName={catProps.catName} onEditCatName={onEditCatName} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} onChangeCurrentAttribute={onChangeCurrentAttribute} />
        </article>
    )
}