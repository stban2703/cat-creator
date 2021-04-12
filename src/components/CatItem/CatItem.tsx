import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import "./CatItem.css";
import { CatView } from '../CatView/CatView';
import { Link } from 'react-router-dom';
//import { CatPropsType } from '../../utils/CatPropsType';

interface CatItemProps {
    catProps: CatPropsType;
}

export const CatItem: React.FC<CatItemProps> = ({ catProps }) => {
    return (
        <Link to={`/create/${catProps.id}`} className="CatItem">
            <div className="CatItem__preview">
            <CatView catProps={catProps} currentAttribute={"fur"} />
            </div>
            <div className="CatItem__info">
                <h3>Nombre: {catProps.catName}</h3>
                <p>Id: {catProps.id}</p>
            </div>
        </Link>
    )
}