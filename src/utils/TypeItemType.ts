import { ColorItemType } from "./ColorItemType";

export type TypeItemType = {
    id: number,
    value: string,
    url: string,
    checked: boolean
    colorList?: ColorItemType[];
}