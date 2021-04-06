import React, { useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import { Intro } from '../Intro/Intro';
import './App.css';
import { CreatedCats } from '../CreatedCats/CreatedCats';
import { CatPropsType } from '../../utils/CatPropsType';

export const App = () => {
    //useState<CatPropsType[]>
    const [catList, setCatList] = useState<CatPropsType[]>([]);

    const handleSaveCat = (id: string, elem: CatPropsType) => {
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((e) => {
            return e.id === id;
        })

        if(catListCopy[catIndex]) {
            console.log("Ya existe")
            catListCopy[catIndex] = elem;
            setCatList(catListCopy)
        } else {
            console.log("No existe")
            const newCat = elem;
            newCat.id = Math.round(Math.random() * (10000000000 - 1)).toString();
            newCat.creationDate = Date.now();
            catListCopy.push(newCat);
            setCatList(catListCopy);
        }
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" exact render={() => <Intro />} />
                <Route path="/create/:id" render={() =>
                    <Creator catList={catList} onSaveCat={handleSaveCat} />}
                />
                <Route path="/cats/" render={() => <CreatedCats catList={catList} />} />
            </HashRouter>
        </main>
    );
}