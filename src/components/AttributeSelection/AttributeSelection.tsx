import React from 'react';
import { SettingOptionType } from '../../utils/SettingOptionType';
import { AttributeItem } from '../AttributeItem/AttributeItem';
import './AttributeSelection.css';

interface AttributeSelectionProps {
    settingOptions: SettingOptionType[];
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const AttributeSelection: React.FC<AttributeSelectionProps> = ({ settingOptions, onChangeCurrentAttribute }) => {
    return (
        <section className="AttributeSelection">
            {settingOptions.map(({ id, url, checked }) => {
                const intermediateChangeAttribute = () => {
                    onChangeCurrentAttribute(id)
                }
                return <AttributeItem key={id} value={id} url={url} checked={checked} onChangeCurrentAttribute={intermediateChangeAttribute}/>
            })}
        </section>
    )
}