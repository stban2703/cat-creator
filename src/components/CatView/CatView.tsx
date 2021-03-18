import React from 'react';
import './CatView.css';

interface CatViewProps {
    test: string;
}

export const CatView: React.FC<CatViewProps> = ({test}) => {
    return(
        <article className="CatView">

        </article>
    )
}