import React from 'react';
import { SettingOptionType } from '../../utils/SettingOptionType';
import { SettingOptionItem } from '../SettingOptionItem/SettingOptionItem';
import './EditSelection.css';

interface EditSelectionProps {
    settingOptions: SettingOptionType[];
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const EditSelection: React.FC<EditSelectionProps> = ({ settingOptions, onChangeCurrentAttribute }) => {
    return (
        <section className="EditSelection">
            {settingOptions.map(({ id, url, checked }) => {
                const intermediateChangeAttribute = () => {
                    onChangeCurrentAttribute(id)
                }
                return <SettingOptionItem key={id} value={id} url={url} checked={checked} onChangeCurrentAttribute={intermediateChangeAttribute}/>
            })}
        </section>
    )
}