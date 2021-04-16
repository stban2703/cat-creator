import React, { useRef, useState } from 'react';
import { CatPropsType } from '../../utils/CatPropsType';
import "./CatItem.css";
import { CatView } from '../CatView/CatView';
import { Link } from 'react-router-dom';
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';

interface CatItemProps {
    catProps: CatPropsType;
    onDeleteCat: () => void;
}

export const CatItem: React.FC<CatItemProps> = ({ catProps, onDeleteCat }) => {

    const catPreviewRef = useRef(null);
    const [isDownloading, setIsDownloading] = useState(false);

    const handleDownloadCat = () => {
        setIsDownloading(true)
        domtoimage.toBlob(catPreviewRef.current!)
            .then(function (blob) {
                saveAs(blob, `${catProps.catName}-${catProps.id}.png`);
                setIsDownloading(false);
            });
    }

    return (
        <div className="CatItem">
            <div className={`CatItem__preview${isDownloading ? " CatItem__preview--big" : ""}`} ref={catPreviewRef} >
                <CatView catProps={catProps} currentAttribute={"fur"} />
            </div>
            <div className="CatItem__info">
                <h3>{catProps.catName}</h3>
                <p><strong>Id:</strong> {catProps.id}</p>
                <p><strong>Fecha:</strong> {new Date(catProps.creationDate).toLocaleDateString("es-ES")}</p>
                <p><strong>Hora:</strong> {new Date(catProps.creationDate).toLocaleTimeString("es-ES")}</p>
            </div>
            <div className="CatItem__control">
                <Link to={`/create/${catProps.id}`} className="CatItem__btn CatItem__btn--edit">
                    Editar
                </Link>
                <button className="CatItem__btn CatItem__btn--delete" onClick={onDeleteCat} >
                    Eliminar
                </button>
                <button className="CatItem__btn CatItem__btn--download" onClick={() => { handleDownloadCat() }} >
                    Descargar imagen
                </button>
            </div>
        </div >
    )
}