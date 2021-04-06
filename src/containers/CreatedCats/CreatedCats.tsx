import React from 'react';
import { Link } from 'react-router-dom';
import { CatItem } from '../../components/CatItem/CatItem';
import { CatPropsType } from '../../utils/CatPropsType';

interface CreatedCatsProps {
    catList: CatPropsType[];
}

export const CreatedCats: React.FC<CreatedCatsProps> = ({ catList }) => {
    return (
        <article className="CreatedCats" >
            <h2 className="CreatedCats__title">Gatos creados</h2>
            <ul className="CreatedCats__container">
                {catList.map(({ id, catName }) => {
                    return <Link to={`/create/${id}`} key={id} >
                        <CatItem id={id} catName={catName} />
                    </Link>
                })}
            </ul>
            <Link to={`/create/new`}>Crear otro</Link>
        </article>
    )
}