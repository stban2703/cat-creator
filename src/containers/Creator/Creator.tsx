import React, { useEffect, useState } from 'react';
import { EditPanel } from '../../components/EditPanel/EditPanel';
import { CatPropsType } from '../../utils/CatPropsType';
import './Creator.css';
import { useParams } from 'react-router';
import { initialCatProps } from '../App/initialCatProps';
import { initialAttributeOptions } from '../App/initialAttributeOptions';
import { AttributeOptionType } from '../../utils/AttributeOptionType';
import { EditView } from '../../components/EditView/EditView';

interface CreatorProps {
    catList: CatPropsType[];
    onSaveCat: (id: string, elem: CatPropsType) => void;
}

export const Creator: React.FC<CreatorProps> = ({ catList, onSaveCat }) => {
    const { id } = useParams<{ id: string }>();
    const [catProps, setCatProps] = useState(initialCatProps);
    const [currentAttribute, setCurrentAttribute] = useState("fur");
    const [attributeOptions, setAttributeOptions] = useState<AttributeOptionType[]>(initialAttributeOptions);

    useEffect(() => {
        const catPropsElem = catList.find((elem) => {
            return elem.id === id;
        });
        if (catPropsElem) {
            setCatProps(catPropsElem);
        } else {
            setCatProps(JSON.parse(JSON.stringify(initialCatProps)));
        }
        setCurrentAttribute("fur");
        setAttributeOptions(JSON.parse(JSON.stringify(initialAttributeOptions)));
    }, [id, catList]);

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

    const handleChangeFilter = (value: string) => {
        const catPropsCopy = {...catProps};
        catPropsCopy.filter = value;
        setCatProps(catPropsCopy);
    }

    return (
        <article className="Creator">
            <EditView catProps={catProps!} currentAttribute={currentAttribute} />
            <EditPanel catProps={catProps!} onEditCatName={handleCatName} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeFilter={handleChangeFilter} onChangeCurrentAttribute={handleCurrentAttribute} onSaveCat={onSaveCat} />
        </article>
    )
}