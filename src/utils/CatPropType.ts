import { SettingType } from "./SettingType";

export type CatPropType = {
    id: number,
    catName: string,
    creationDate: number,
    settings: SettingType[];
}