import React from 'react';
import './CatView.css';

interface CatViewProps {
    catProps: {attribute: string, type: string, color: string} [];
}

export const CatView: React.FC<CatViewProps> = ({ catProps }) => {
    return (
        <article className="CatView">
            <h4>Atributo: {catProps[0].attribute} = Tipo: {catProps[0].type} y Color: {catProps[0].color}</h4>
            <h4>Atributo: {catProps[1].attribute} = Tipo: {catProps[1].type} y Color: {catProps[1].color}</h4>
            <h4>Atributo: {catProps[2].attribute} = Tipo: {catProps[2].type} y Color: {catProps[2].color}</h4>
            <h4>Atributo: {catProps[3].attribute} = Tipo: {catProps[3].type} y Color: {catProps[3].color}</h4>
        </article>
    )
}