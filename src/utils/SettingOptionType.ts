import { ColorType } from "./ColorType";
import { ItemType } from "./ItemType";

export type SettingOptionType = {
    id: string,
    url: string,
    checked: boolean,
    itemList: ItemType[],
    colorList: ColorType[]
}