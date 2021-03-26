import React, { useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import './App.css';

import { initialCatProps } from './initialCatProps';
import { initialAttributeOptions } from './initialSettingsOptions';

export const App = () => {
    const [catProps, setCatProps] = useState(initialCatProps);
    const [attributeOptions, setAttributeList] = useState(initialAttributeOptions);
    const [currentAttribute, setCurrentAttribute] = useState("fur");

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

    const handleAttributeColor = (newColor: string) => {
        const catPropsCopy = { ...catProps };
        const catSettingsIndex = catPropsCopy.settings.findIndex((elem) => {
            return elem.id === currentAttribute;
        });

        catPropsCopy.settings[catSettingsIndex].fill = newColor;

        const settingsOptionsCopy = initialAttributeOptions.slice();
        const settingsOptionsIndex = settingsOptionsCopy.findIndex((elem) => {
            return elem.id === currentAttribute;
        })

        settingsOptionsCopy[settingsOptionsIndex].colorList.forEach(elem => {
            if (elem.fill === catPropsCopy.settings[catSettingsIndex].fill) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })

        setCatProps(catPropsCopy);
        setAttributeList(settingsOptionsCopy);
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" render={() =>
                    <Creator catProps={catProps} attributeOptions={attributeOptions} currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} />}
                />
            </HashRouter>
        </main>
    );
}