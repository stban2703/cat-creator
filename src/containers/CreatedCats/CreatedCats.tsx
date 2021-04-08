import React from 'react';
import { Link } from 'react-router-dom';
import { CatItem } from '../../components/CatItem/CatItem';
import { CatPropsType } from '../../utils/CatPropsType';
import "./CreatedCats.css";

interface CreatedCatsProps {
    catList: CatPropsType[];
}

export const CreatedCats: React.FC<CreatedCatsProps> = ({ catList }) => {
    return (
        <article className="CreatedCats" >
            <h2 className="CreatedCats__title">Gatos creados</h2>
            <ul className="CreatedCats__container">
                {catList.map((elem) => {
                    return <Link to={`/create/${elem.id}`} key={elem.id} >
                        <CatItem catProps={elem} />
                    </Link>
                })}
            </ul>
            <Link className="CreatedCats__newBtn" to={`/create/new`}>Crear otro</Link>
        </article>
    )
}