import React from 'react';
import { EditItem } from '../EditItem/EditItem';
import './EditSection.css';

interface EditSectionProps {
    currentAttribute: string;
    itemList: {id: number, value: string, checked: boolean}[];
    onEditAttributeType: (newType: string) => void;
}

export const EditSection: React.FC<EditSectionProps> = ({currentAttribute, itemList, onEditAttributeType}) => {
    return (
        <section className="EditSection">
            <h3 className="EditSection__title">Tipo</h3>
            <div className="EditSection__items">
                {itemList.map( ({ id, value, checked}) => {
                    return <EditItem key={id} value={value} checked={checked} onEditAttributeType={onEditAttributeType}/>
                })}
            </div>
        </section>
    )
}