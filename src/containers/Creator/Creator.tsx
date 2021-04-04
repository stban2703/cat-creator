import React from 'react';
//import { useParams } from 'react-router';
import { CatView } from '../../components/CatView/CatView';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { CatPropsType } from '../../utils/CatPropsType';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import './Creator.css';
import { useParams } from 'react-router';

interface CreatorProps {
    catList: CatPropsType[];
    currentAttribute: string;
    attributeOptions: AttributeOptionType[];
    onEditCatName: (id: string, newName: string) => void;
    onEditAttributeType: (id: string,newType: string) => void;
    onEditAttributeColor: (id: string,colorFill: string, colorStroke: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
    onSaveCat: (id: string,) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catList, attributeOptions, currentAttribute, onEditCatName, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute, onSaveCat }) => {

    const { id } = useParams<{ id: string }>();    
    const handleCatProps = (id: string) => {
        const catPropsElem = catList.find((elem) => {
            return elem.id === id;
        })
        if(catPropsElem) {
            return catPropsElem;
        } else {
            return catList.find((elem) => {
                return elem.id === "0";
            });
        }
    }
    const catProps = handleCatProps(id);

    return (
        <article className="Creator">
            <CatView catProps={catProps!} currentAttribute={currentAttribute} />
            <div className="Creator__empty"></div>
            <EditPanel catName={catProps!.catName} onEditCatName={onEditCatName} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} onChangeCurrentAttribute={onChangeCurrentAttribute} onSaveCat={onSaveCat} />
        </article>
    )
}