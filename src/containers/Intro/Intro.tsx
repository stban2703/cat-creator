import React from 'react';
import { Link } from 'react-router-dom';

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = () => {
    return(
        <article>
            <h1>Cat creator</h1>
            <Link to={`/creator`}>Crear gato</Link>
        </article>
    )
}