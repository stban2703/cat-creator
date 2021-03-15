import React from 'react';
import './EditItem.css';

interface EditItemProps {
    test: string;
    isChecked? : boolean;
}

export const EditItem: React.FC<EditItemProps> = (props) => {
    return (
        <div className="EditItem">
            <h1>{props.test}</h1>
            <img src="" alt="Item" />
            <img src="" alt="Checked" />
        </div>
    )
}