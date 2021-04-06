import React from 'react';
//import { CatPropsType } from '../../utils/CatPropsType';

interface CatItemProps {
    id: string,
    catName: string
}

export const CatItem: React.FC<CatItemProps> = ({ id, catName }) => {
    return (
        <li>
            <h3>{id}</h3>
            <p>{catName}</p>
        </li>
    )
}