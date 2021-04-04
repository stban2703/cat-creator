import React from 'react';
import { Link } from 'react-router-dom';
import './Intro.css'

interface IntroProps {

}

export const Intro: React.FC<IntroProps> = () => {
    return (
        <article className="Intro">
            <section className="Intro__container">
                <h1 className="Intro__title" >Cat creator</h1>
                <section className="Intro__controls">
                    <Link className="Intro__btn" to={`/create/0`}>Crear un gato</Link>
                    <Link className="Intro__btn Intro__btn--gray" to={`/cats`}>Ver creados</Link>
                </section>
            </section>
        </article>
    )
}