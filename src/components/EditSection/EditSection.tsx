import React from 'react';
import { EditItem } from '../EditItem/EditItem';
import './EditSection.css';

interface EditSectionProps {
    name: string;
    itemList: {id: number, name: string, checked: boolean}[];
}

export const EditSection: React.FC<EditSectionProps> = ({name, itemList}) => {
    return (
        <section className="EditSection">
            <h3 className="EditSection__title">{name}</h3>
            <div className="EditSection__items">
                {itemList.map( ({ id, name, checked}) => {
                    return <EditItem key={id} name={name} checked={checked}/>
                })}
            </div>
        </section>
    )
}