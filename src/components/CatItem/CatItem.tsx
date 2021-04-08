import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { CatView } from '../CatView/CatView';
import "./CatItem.css";
//import { CatPropsType } from '../../utils/CatPropsType';

interface CatItemProps {
    catProps: CatPropsType;
}

export const CatItem: React.FC<CatItemProps> = ({ catProps }) => {
    return (
        <li className="CatItem">
            <div className="CatItem__preview">
               
            </div>
            <div className="CatItem__info">
                <h3>{catProps.id}</h3>
                <p>{catProps.catName}</p>
            </div>
        </li>
    )
}