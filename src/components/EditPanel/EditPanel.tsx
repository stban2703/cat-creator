import React from 'react';
import { SettingOptionType } from '../../utils/SettingOptionType';
import { EditSelection } from '../EditSelection/EditSelection';
import { EditOptions } from '../EditOptions/EditOptions';
import './EditPanel.css';

interface EditPanelProps {
    settingOptions: SettingOptionType[];
    currentAttribute: string;
    onEditAttributeType: (newType: string) => void;
    onEditAttributeColor: (newColor: string) => void;
    onChangeCurrentAttribute: (newCurrentAttribute: string) => void;
}

export const EditPanel: React.FC<EditPanelProps> = ({ settingOptions, currentAttribute, onEditAttributeType, onEditAttributeColor, onChangeCurrentAttribute }) => {

    const getItemListFromId = (newAttribute: string) => {
        const copy = settingOptions.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === newAttribute;
        })
        const newItemList = settingOptions[index].itemList;
        return newItemList;
    };

    const getColorListFromId = (newAttribute: string) => {
        const copy = settingOptions.slice();
        const index = copy.findIndex((elem) => {
            return elem.id === newAttribute;
        })
        const newColorList = settingOptions[index].colorList;
        return newColorList;
    }

    const itemList = getItemListFromId(currentAttribute);
    const colorList = getColorListFromId(currentAttribute);

    return (
        <article className="EditPanel">
            <EditSelection settingOptions={settingOptions} onChangeCurrentAttribute={onChangeCurrentAttribute} />
            <EditOptions currentAttribute={currentAttribute} onEditAttributeType={onEditAttributeType} onEditAttributeColor={onEditAttributeColor} itemList={itemList} colorList={colorList} />
        </article>
    )
}