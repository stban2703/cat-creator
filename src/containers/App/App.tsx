import React, { useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { SvgLoader, SvgProxy } from "react-svgmt";
import { Creator } from '../Creator/Creator';
import './App.css';
import { initialCatAttributes } from './initialCatAttributes';
import { initialCatProps } from './initialCatProps';

export const App = () => {
    const [catProps, setCatProps] = useState(initialCatProps);
    const [attributeList, setAttributeList] = useState(initialCatAttributes);
    const [currentAttribute, setCurrentAttribute] = useState("fur");

    const handleCurrentAttribute = (newCurrentAttribute: string) => {
        const copy = attributeList.slice();
        copy.forEach(e => {
            if (e.attribute === newCurrentAttribute) {
                e.checked = true;
            } else e.checked = false;
        })
        setAttributeList(copy);
        setCurrentAttribute(newCurrentAttribute);
    }

    const handleAttributeType = (newType: string) => {
        const catPropsCopy = catProps.slice();
        const catIndex = catPropsCopy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        });
        catPropsCopy[catIndex].type = newType;

        const attributeListCopy = attributeList.slice();
        const attributeIndex = attributeListCopy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        })

        attributeListCopy[attributeIndex].itemList.forEach(elem => {
            if (elem.value === catPropsCopy[catIndex].type) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })
        setCatProps(catPropsCopy);
        setAttributeList(attributeListCopy);
    }

    const handleAttributeColor = (newColor: string) => {
        const catPropsCopy = catProps.slice();
        const catIndex = catPropsCopy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        });

        catPropsCopy[catIndex].color = newColor;

        const attributeListCopy = attributeList.slice();
        const attributeIndex = attributeListCopy.findIndex((elem) => {
            return elem.attribute === currentAttribute;
        })

        attributeListCopy[attributeIndex].colorList.forEach(elem => {
            if (elem.value === catPropsCopy[catIndex].color) {
                elem.checked = true;
            } else {
                elem.checked = false;
            }
        })

        setCatProps(catPropsCopy);
        setAttributeList(attributeListCopy);
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" render={() =>
                    <Creator catProps={catProps} attributeList={attributeList} currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} />}
                />

            </HashRouter>
        </main>
    );
}