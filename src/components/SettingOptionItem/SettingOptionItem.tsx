import React from 'react';
import { getImageSrcFromUrl } from '../../utils/getImageSrcFromUrl';
import './SettingOptionItem.css'

interface SettingOptionItemProps {
    value: string;
    url: string;
    checked: boolean;
    onChangeCurrentAttribute: () => void;
}

export const SettingOptionItem:React.FC<SettingOptionItemProps> = ({ value, url, checked, onChangeCurrentAttribute }) => {
    const imageSrc = getImageSrcFromUrl(url)

    return(
        <div className={`SettingOptionItem${checked ? " SettingOptionItem--selected" : ""}`} onClick={onChangeCurrentAttribute}>
            <img className={`SettingOptionItem__image`} src={imageSrc} alt="" />
        </div>
    )
}