import React, { useState } from 'react';
import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import { Intro } from '../Intro/Intro';

const initialProps = [
    {
        attribute: "fur",
        type: "blank",
        color: "#ffffff",
    },
    {
        attribute: "eyes",
        type: "expanded",
        color: "#ffffff",
    },
    {
        attribute: "necklace",
        type: "blank",
        color: "#ffffff",
    },
    {
        attribute: "hat",
        type: "blank",
        color: "#ffffff",
    },
    /*{
        attribute: "scene",
        type: "blank",
        filter: "none",
    },*/
]

const initialAttributes = [
    {
        id: 0,
        attribute: "fur",
        checked: true,
        itemList: [
            {
                id: 0,
                value: "blank",
                checked: true
            },
            {
                id: 1,
                value: "lines",
                checked: false
            },
            {
                id: 2,
                value: "colorAndwhite",
                checked: false
            },
            {
                id: 3,
                value: "siamese",
                checked: false
            },
            {
                id: 4,
                value: "tricolor",
                checked: false
            }
        ],

        colorList: [
            {
                id: 0,
                value: "#ffffff",
                checked: true
            },
            {
                id: 1,
                value: "#000000",
                checked: false
            },
            {
                id: 2,
                value: "#DC1515",
                checked: false
            }
        ]
    },
    {
        id: 1,
        attribute: "eyes",
        checked: false,
        itemList: [
            {
                id: 0,
                value: "expanded",
                checked: true
            },
            {
                id: 1,
                value: "normal",
                checked: false
            },
            {

                id: 2,
                value: "contracted",
                checked: false
            }
        ],
        colorList: [
            {
                id: 0,
                value: "#ffffff",
                checked: true
            },
            {
                id: 1,
                value: "#000000",
                checked: false
            },
            {
                id: 2,
                value: "#DC1515",
                checked: false
            }
        ]
    },
    {
        id: 2,
        attribute: "necklace",
        checked: false,
        itemList: [
            {
                id: 0,
                value: "blank",
                checked: true
            },
            {
                id: 1,
                value: "round",
                checked: false
            },
            {
                id: 2,
                value: "heart",
                checked: false
            },
            {

                id: 3,
                value: "ribbon",
                checked: false
            }
        ],
        colorList: [
            {
                id: 0,
                value: "#ffffff",
                checked: true
            },
            {
                id: 1,
                value: "#000000",
                checked: false
            },
            {
                id: 2,
                value: "#DC1515",
                checked: false
            }
        ]
    },
    {
        id: 3,
        attribute: "hat",
        checked: false,
        itemList: [
            {
                id: 0,
                value: "blank",
                checked: true
            },
            {
                id: 1,
                value: "tophat",
                checked: false
            },
            {
                id: 2,
                value: "party",
                checked: false
            }
        ],
        colorList: [
            {
                id: 0,
                value: "#ffffff",
                checked: true
            },
            {
                id: 1,
                value: "#000000",
                checked: false
            },
            {
                id: 2,
                value: "#DC1515",
                checked: false
            }
        ]
    }/*,
    {
        id: 4,
        attribute: "scene",
        checked: false
    }*/
]

export const App = () => {
    const [catProps, setCatProps] = useState(initialProps);
    const [attributeList, setAttributeList] = useState(initialAttributes);
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
            <BrowserRouter>

                <Route path="/" exact render={() => <Intro />} />

                <Route path="/creator" render={() =>
                    <Creator catProps={catProps} attributeList={attributeList} currentAttribute={currentAttribute} onEditAttributeType={handleAttributeType} onEditAttributeColor={handleAttributeColor} onChangeCurrentAttribute={handleCurrentAttribute} />}
                />

            </BrowserRouter>
        </main>
    );
}