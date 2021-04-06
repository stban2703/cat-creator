import React, { useState } from 'react';
import { CatView } from '../../components/CatView/CatView';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { CatPropsType } from '../../utils/CatPropsType';
import './Creator.css';
import { useParams } from 'react-router';
import { initialCatProps } from '../App/initialCatProps';
import { initialAttributeOptions } from '../App/initialAttributeOptions';

interface CreatorProps {
    catList: CatPropsType[];
    onSaveCat: (id: string, elem: CatPropsType) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catList, onSaveCat }) => {
    const { id } = useParams<{ id: string }>();
    const handleCatProps = (id: string) => {
        const catPropsElem = catList.find((elem) => {
            return elem.id === id;
        })

        if (catPropsElem) {
            return catPropsElem;
        } else return { ...initialCatProps };
    }

    const [catProps, setCatProps] = useState(handleCatProps(id));
    const [currentAttribute, setCurrentAttribute] = useState("fur");
    const [attributeOptions, setAttributeOptions] = useState(initialAttributeOptions.slice());
    console.log(catList)

    const handleCatName = (newName: string) => {
        const catCopy = { ...catProps! }
        catCopy.catName = newName;
        setCatProps(catCopy);
    }

    const handleCurrentAttribute = (newCurrentAttribute: string) => {
        const copy = attributeOptions.slice();
        copy.forEach(e => {
            if (e.id === newCurrentAttribute) {
                e.checked = true;
            } else e.checked = false;
        })
        setAttributeOptions(copy);
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (newType: string) => {
        const catCopy = { ...catProps! };
        const catSettingsCopy = [...catCopy.settings];

        const catSettingsIndex = catSettingsCopy.findIndex((elem) => {
            return elem.id === currentAttribute;
        });

        catSettingsCopy[catSettingsIndex].type = newType;
        catCopy.settings = catSettingsCopy;

        const attributeOptionsCopy = attributeOptions.slice();
        const attributeOptionsIndex = attributeOptionsCopy.findIndex(elem => {
            return elem.id === currentAttribute;
        })
        const itemListCopy = attributeOptionsCopy[attributeOptionsIndex].itemList;

        itemListCopy.forEach(elem => {
            if (elem.value === catSettingsCopy[catSettingsIndex].type) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })
        attributeOptionsCopy[attributeOptionsIndex].itemList = itemListCopy;
        // Set hooks
        setCatProps(catCopy)
        setAttributeOptions(attributeOptionsCopy);
    }

    const handleAttributeColor = (colorFill: string, colorStroke: string) => {
        const catCopy = { ...catProps! };
        const catSettingsCopy = [...catCopy.settings];
        const catSettingsIndex = catSettingsCopy.findIndex((elem) => {
            return elem.id === currentAttribute;
        });
        catSettingsCopy[catSettingsIndex].fill = colorFill;
        catSettingsCopy[catSettingsIndex].stroke = colorStroke;
        catCopy.settings = catSettingsCopy;
        setCatProps(catCopy);
    }

    return (
        <article className="Creator">
            <CatView catProps={catProps!} currentAttribute={currentAttribute} />
            <div className="Creator__empty"></div>
            <EditPanel catProps={catProps!} onEditCatName={handleCatName} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} onSaveCat={onSaveCat} />
        </article>
    )
}