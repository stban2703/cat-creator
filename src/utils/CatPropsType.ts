import { CatSettingType } from "./CatSettingType";

export type CatPropsType = {
    id: number,
    catName: string,
    creationDate: number,
    settings: CatSettingType[];
}