import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import './CatControl.css';

interface CatControlProps {
    catName: string;
    onEditCatName: (id: string, newName: string) => void;
    onSaveCat: (id: string) => void;
}

export const CatControl: React.FC<CatControlProps> = ({ catName, onEditCatName, onSaveCat }) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onEditCatName(id, event.target.value);
    }
    const intermediateSaveCat = () => {
        onSaveCat(id);
        history.push("/cats/");
    }
    return (
        <section className="CatControl">
            <input className="CatControl__input" type="text" name="catName" value={catName} placeholder="Escribe el nombre de tu gato" onChange={handleTextChange} />
            <div className="CatControl__options">
                <div className="CatControl__section">
                    <button className="CatControl__btn CatControl__btn--green" onClick={intermediateSaveCat} >
                        Guardar
                    </button>
                    <button className="CatControl__btn CatControl__btn--default">
                        Por defecto
                    </button>
                </div>
                <div className="CatControl__section">
                    <Link className="CatControl__btn CatControl__btn--navegate" to={'/cats/'}>
                        Ver creados
                    </Link>
                    <Link className="CatControl__btn CatControl__btn--exit" to={'/'}>
                        Salir
                    </Link>
                </div>
            </div>
        </section>
    )
}