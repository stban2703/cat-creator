import React, { useEffect, useState } from 'react';
import { Route } from 'react-router';
import { HashRouter } from 'react-router-dom';
import { Creator } from '../Creator/Creator';
import { Intro } from '../Intro/Intro';
import { CreatedCats } from '../CreatedCats/CreatedCats';
import { CatPropsType } from '../../utils/CatPropsType';
import "./reset.css";
import './App.css';

export const App = () => {
    const storageList: CatPropsType[] = JSON.parse(window.localStorage.getItem('catList')!);
    const [catList, setCatList] = useState<CatPropsType[]>(storageList || []);

    useEffect(
        () => {
            window.localStorage.setItem('catList', JSON.stringify(catList));
        },
        [catList]);

    const handleSaveCat = (id: string, elem: CatPropsType) => {
        const catListCopy = [...catList];
        const catIndex = catListCopy.findIndex((e) => {
            return e.id === id;
        })

        if (catListCopy[catIndex]) {
            catListCopy[catIndex] = elem;
            setCatList(catListCopy)
        } else {
            const newCat = elem;
            newCat.id = Math.round(Math.random() * (10000000000 - 1)).toString();
            newCat.creationDate = Date.now();
            if (newCat.catName === "") {
                newCat.catName = "Sin nombre";
            }
            catListCopy.push(newCat);
            setCatList(catListCopy);
        }
    }

    const handleDeleteCat = (id: string) => {
        const catListCopy = catList.slice();
        const catIndex = catList.findIndex((elem) => {
            return elem.id === id;
        })
        catListCopy.splice(catIndex, 1);
        setCatList(catListCopy);
    }

    return (
        <main className="App">
            <HashRouter basename={process.env.PUBLIC_URL}>
                <Route path="/" exact render={() => <Intro />} />
                <Route path="/create/:id" render={() =>
                    <Creator catList={catList} onSaveCat={handleSaveCat} />}
                />
                <Route path="/cats/" render={() => <CreatedCats catList={catList} onDeleteCat={handleDeleteCat} />} />
            </HashRouter>
        </main>
    );
}