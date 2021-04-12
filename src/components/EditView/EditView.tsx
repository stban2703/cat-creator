import React from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import { CatView } from '../CatView/CatView';
import './EditView.css';

interface EditViewProps {
    catProps: CatPropsType;
    currentAttribute: string;
}

export const EditView: React.FC<EditViewProps> = ({ catProps, currentAttribute }) => {
    return (
        <div className="EditView">
            <CatView catProps={catProps} currentAttribute={currentAttribute} />
        </div>
    )
}