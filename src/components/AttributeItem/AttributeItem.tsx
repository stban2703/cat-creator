import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './AttributeItem.css'

interface AttributeItemProps {
    value: string;
    url: string;
    checked: boolean;
    onChangeCurrentAttribute: () => void;
}

export const AttributeItem:React.FC<AttributeItemProps> = ({ value, url, checked, onChangeCurrentAttribute }) => {
    const imageSrc = getImageSrcFromUrl(url)

    return(
        <div className={`AttributeItem${checked ? " AttributeItem--selected" : ""}`} onClick={onChangeCurrentAttribute}>
            <img className={`AttributeItem__image`} src={imageSrc} alt="" />
        </div>
    )
}