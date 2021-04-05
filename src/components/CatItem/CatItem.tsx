import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';

interface CatItemProps {
    id: string,
    catName: string
}

export const CatItem: React.FC<CatItemProps> = ({ id, catName }) => {
    return (
        <div>
            <h3>{catName}</h3>
        </div>
    )
}