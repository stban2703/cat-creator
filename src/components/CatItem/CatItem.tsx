import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import "./CatItem.css";
import { CatView } from '../CatView/CatView';
import { Link } from 'react-router-dom';
//import { CatPropsType } from '../../utils/CatPropsType';

interface CatItemProps {
    catProps: CatPropsType;
    onDeleteCat: () => void;
}

export const CatItem: React.FC<CatItemProps> = ({ catProps, onDeleteCat }) => {
    return (
        <div className="CatItem">
            <div className="CatItem__preview">
                <CatView catProps={catProps} currentAttribute={"fur"} />
            </div>
            <div className="CatItem__info">
                <h3>Nombre: {catProps.catName}</h3>
                <p><strong>Id:</strong> {catProps.id}</p>
                <p><strong>Fecha:</strong> {new Date(catProps.creationDate).toLocaleDateString("es-ES")}</p>
                <p><strong>Hora:</strong> {new Date(catProps.creationDate).toLocaleTimeString("es-ES")}</p>
            </div>
            <div className="CatItem__control">
                <Link to={`/create/${catProps.id}`} className="CatItem__btn CatItem__btn--edit">
                    Editar
                </Link>
                <button className="CatItem__btn CatItem__btn--delete" onClick={onDeleteCat} >
                    Eliminar
                </button>
            </div>
        </div>
    )
}