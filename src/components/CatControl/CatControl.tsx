import React from 'react';
import { Link } from 'react-router-dom';
import './CatControl.css';

interface CatControlProps {
    catName: string;
    onEditCatName: (newName: string) => void;
}

export const CatControl: React.FC<CatControlProps> = ({ catName, onEditCatName }) => {
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onEditCatName(event.target.value);
    }

    return (
        <form className="CatControl">
            <input className="CatControl__input" type="text" name="catName" value={catName} placeholder="Escribe el nombre de tu gato" onChange={handleTextChange} />
            <div className="CatControl__options">
                <div className="CatControl__section">
                    <button className="CatControl__btn CatControl__btn--green">
                        Guardar
                    </button>
                    <button className="CatControl__btn CatControl__btn--default">
                        Por defecto
                    </button>
                </div>
                <div className="CatControl__section">
                    <Link className="CatControl__btn CatControl__btn--navegate" to={'/'}>
                        Ver creados
                    </Link>
                </div>
            </div>
        </form>
    )
}