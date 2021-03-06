import { ColorItemType } from "./ColorItemType";

export type TypeItemType = {
    itemId: number,
    value: string,
    url: string,
    checked: boolean
    colorList?: ColorItemType[];
}