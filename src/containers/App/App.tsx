import React, { useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import { Intro } from '../Intro/Intro';
import './App.css';
import { initialCatProps } from './initialCatProps';
import { initialAttributeOptions } from './initialAttributeOptions';

export const App = () => {
    const [catProps, setCatProps] = useState(initialCatProps);
    const [attributeOptions, setAttributeList] = useState(initialAttributeOptions);
    const [currentAttribute, setCurrentAttribute] = useState("fur");
    const [catList, setCatList] = useState([initialCatProps])

    const selectCat = (id: number) => {
        catList.find((elem) => {
            return elem.id === id;
        })
    }

    const handleCatName = (newName: string) => {
        const catPropsCopy = { ...catProps };
        catPropsCopy.catName = newName;
        setCatProps(catPropsCopy);
    }

    const handleCurrentAttribute = (newCurrentAttribute: string) => {
        const copy = attributeOptions.slice();
        copy.forEach(e => {
            if (e.id === newCurrentAttribute) {
                e.checked = true;
            } else e.checked = false;
        })
        setAttributeList(copy);
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (newType: string) => {
        const catPropsCopy = { ...catProps };
        const catSettingsIndex = catPropsCopy.settings.findIndex((elem) => {
            return elem.id === currentAttribute;
        });
        catPropsCopy.settings[catSettingsIndex].type = newType;
        const settingsOptionsCopy = attributeOptions.slice();
        const settingsOptionsIndex = settingsOptionsCopy.findIndex(elem => {
            return elem.id === currentAttribute;
        })
        settingsOptionsCopy[settingsOptionsIndex].itemList.forEach(elem => {
            if (elem.value === catPropsCopy.settings[catSettingsIndex].type) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })
        setCatProps(catPropsCopy);
        setAttributeList(settingsOptionsCopy);
    }

    const handleAttributeColor = (colorFill: string, colorStroke: string) => {
        const catPropsCopy = { ...catProps };
        const catSettingsCopy = catPropsCopy.settings;

        const catSettingsIndex = catSettingsCopy.findIndex((elem) => {
            return elem.id === currentAttribute;
        });
        catSettingsCopy[catSettingsIndex].fill = colorFill;
        catSettingsCopy[catSettingsIndex].stroke = colorStroke;
        catPropsCopy.settings = catSettingsCopy;
        setCatProps(catPropsCopy);
    }

    const handleSaveCat = () => {
        const catListCopy = [...catList];
        const newCat = catProps;
        const randomId = Math.round(Math.random() * (10000000000 - 1));
        newCat.id = randomId;
        newCat.creationDate = Date.now();
        if (catListCopy[0].id !== 0) {
            catListCopy.push(newCat);
            setCatList(catListCopy);
        } else {
            catListCopy[0] = newCat;
            setCatList(catListCopy);
        }
        setCatList(catListCopy);
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" exact render={() => <Intro />} />
                <Route path="/create/:id" render={() =>
                    <Creator catProps={catProps} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditCatName={handleCatName} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} onSaveCat={handleSaveCat} />}
                />
            </HashRouter>
        </main>
    );
}