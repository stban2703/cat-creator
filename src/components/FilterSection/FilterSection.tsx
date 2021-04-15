import React from 'react';
import "./FilterSection.css";

interface FilterSectionProps {
    catFilter: string;
    onChangeFilter: (value: string) => void;
}

export const FilterSection:React.FC<FilterSectionProps> = ({catFilter, onChangeFilter}) => {

    const handleSelectChange: React.ChangeEventHandler<HTMLSelectElement> = (event) => {
        onChangeFilter(event.target.value);
    }

    return(
        <section className="FilterSection">
            <h3 className="FilterSection__title">Filtro</h3>
            <select className="FilterSection__select" onChange={handleSelectChange} value={catFilter} >
               <option value="none">
                    Ninguno
               </option>
               <option value="grayscale">
                    Escala de grises
               </option>
               <option value="invert">
                    Invertido
               </option>
               <option value="sepia">
                    Sepia
               </option>
            </select>
        </section>
    )
}