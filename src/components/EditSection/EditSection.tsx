import React from 'react';
import { EditItem } from '../EditItem/EditItem';
import './EditSection.css';

interface EditSectionProps {
    itemList: { id: number, value: string, url: string, checked: boolean }[];
    onEditAttributeType: (newType: string) => void;
}

export const EditSection: React.FC<EditSectionProps> = ({ itemList, onEditAttributeType }) => {
    return (
        <section className="EditSection">
            <h3 className="EditSection__title">Tipo</h3>
            <div className="EditSection__items">
                {itemList.map(({ id, value, url, checked }) => {
                    const intermediateEditType = () => {
                        onEditAttributeType(value);
                    }
                    return <EditItem key={id} value={value} url={url} checked={checked} onEditAttributeType={intermediateEditType} />
                })}
            </div>
        </section>
    )
}