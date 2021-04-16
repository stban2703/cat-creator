import React from 'react';
import { Link } from 'react-router-dom';
import { CatItem } from '../../components/CatItem/CatItem';
import { CatPropsType } from '../../utils/CatPropsType';
import "./CreatedCats.css";

interface CreatedCatsProps {
    catList: CatPropsType[];
    onDeleteCat: (id: string) => void;
}

export const CreatedCats: React.FC<CreatedCatsProps> = ({ catList, onDeleteCat }) => {

    return (
        <article className="CreatedCats" >
            <h2 className="CreatedCats__title">Gatos creados</h2>
            <Link className="CreatedCats__newBtn" to={`/create/new`}>Crear gato nuevo</Link>
            <section className="CreatedCats__container">
                {catList.map((elem) => {
                    const intermediateDeleteCat = () => {
                        onDeleteCat(elem.id);
                    }
                    return <CatItem key={elem.id} catProps={elem} onDeleteCat={intermediateDeleteCat} />
                })}
            </section>
        </article>
    )
}