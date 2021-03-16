import React from 'react';
import { EditItem } from '../EditItem/EditItem';
import './EditSection.css';

interface EditSectionProps {
    currentAttribute: string;
    itemList: {id: number, value: string, checked: boolean}[];
}

export const EditSection: React.FC<EditSectionProps> = ({currentAttribute, itemList}) => {
    return (
        <section className="EditSection">
            <h3 className="EditSection__title">Tipo</h3>
            <div className="EditSection__items">
                {itemList.map( ({ id, value, checked}) => {
                    return <EditItem key={id} property={currentAttribute} value={value} checked={checked}/>
                })}
            </div>
        </section>
    )
}