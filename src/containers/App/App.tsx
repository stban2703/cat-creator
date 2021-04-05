import React, { useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import { Intro } from '../Intro/Intro';
import './App.css';
import { initialCatProps } from './initialCatProps';
import { initialAttributeOptions } from './initialAttributeOptions';
import { CreatedCats } from '../CreatedCats/CreatedCats';
import { CatPropsType } from '../../utils/CatPropsType';

export const App = () => {
    const [catList, setCatList] = useState<CatPropsType[]>([]);
    const [currentAttribute, setCurrentAttribute] = useState("fur");
    const [attributeOptions, setAttributeOptions] = useState(initialAttributeOptions.slice());

    const handleCatName = (id: string, newName: string) => {
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((elem) => {
            return elem.id === id;
        });
        catListCopy[catIndex].catName = newName;
        setCatList(catListCopy);
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

    const handleAttributeType = (id: string, newType: string) => {
        // CatList copy and cat index
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((elem) => {
            return elem.id === id;
        })
        const catCopy = catListCopy[catIndex];
        // CatSettings index
        const catSettingsIndex = catCopy.settings.findIndex((elem) => {
            return elem.id === currentAttribute;
        });
        catCopy.settings[catSettingsIndex].type = newType;
        catListCopy[catIndex] = catCopy;
        // AttributeOptions copy and index
        const attributeOptionsCopy = attributeOptions.slice();
        const attributeOptionsIndex = attributeOptionsCopy.findIndex(elem => {
            return elem.id === currentAttribute;
        })
        attributeOptionsCopy[attributeOptionsIndex].itemList.forEach(elem => {
            if (elem.value === catCopy.settings[catSettingsIndex].type) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })
        // Set hooks
        setCatList(catListCopy);
        setAttributeOptions(attributeOptionsCopy);
    }

    const handleAttributeColor = (id: string, colorFill: string, colorStroke: string) => {
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((elem) => {
            return elem.id === id;
        })
        const catCopy = catListCopy[catIndex];
        const catSettingsCopy = catCopy.settings;
        const catSettingsIndex = catSettingsCopy.findIndex((elem) => {
            return elem.id === currentAttribute;
        });
        catSettingsCopy[catSettingsIndex].fill = colorFill;
        catSettingsCopy[catSettingsIndex].stroke = colorStroke;
        catCopy.settings = catSettingsCopy;
        catListCopy[catIndex] = catCopy;
        setCatList(catListCopy);
    }

    const handleSaveCat = (id: string) => {
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((elem) => {
            return elem.id === id;
        })        
        if (id === "new") {
            const newCat = {...catListCopy[catIndex]};
            const randomId = Math.round(Math.random() * (10000000000 - 1));
            newCat.id = "" + randomId;
            newCat.creationDate = Date.now();
            catListCopy.push(newCat);
            // Reset default cat
            const defaultCatIndex = catListCopy.findIndex((elem) => {
                return elem.id === id;
            })
            catListCopy[defaultCatIndex] = {...initialCatProps};
            catListCopy[defaultCatIndex].settings = [...initialCatProps.settings]
            setAttributeOptions([...initialAttributeOptions]);
            setCurrentAttribute("fur");
            setCatList(catListCopy);
            console.log("nuevo");
        } else {
            setAttributeOptions([...initialAttributeOptions]);
            setCurrentAttribute("fur");
            setCatList(catListCopy);
        }
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" exact render={() => <Intro />} />
                <Route path="/create/:id" render={() =>
                    <Creator catList={catList} currentAttribute={currentAttribute} attributeOptions={attributeOptions} onEditCatName={handleCatName} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} onSaveCat={handleSaveCat} />}
                />
                <Route path="/cats/" render={() => <CreatedCats catList={catList} />} />
            </HashRouter>
        </main>
    );
}