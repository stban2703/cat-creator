import React from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import { CatPropsType } from '../../utils/CatPropsType';
import './CatControl.css';

interface CatControlProps {
    catProps: CatPropsType;
    onEditCatName: (newName: string) => void;
    onSaveCat: (id: string, elem: CatPropsType) => void;
}

export const CatControl: React.FC<CatControlProps> = ({ catProps, onEditCatName, onSaveCat }) => {
    const { id } = useParams<{ id: string }>();
    const history = useHistory();
    const handleTextChange: React.ChangeEventHandler<HTMLInputElement> = (event) => {
        onEditCatName(event.target.value);
    }
    const intermediateSaveCat = () => {
        onSaveCat(id, catProps);
        history.push("/cats/");
    }
    return (
        <section className="CatControl">
            <input className="CatControl__input" type="text" name="catName" value={catProps.catName} placeholder="Escribe el nombre de tu gato" onChange={handleTextChange} autoComplete="off" maxLength={10} />
            <div className="CatControl__options">
                <div className="CatControl__section">
                    <button className="CatControl__btn CatControl__btn--green" onClick={intermediateSaveCat} >
                        Guardar
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