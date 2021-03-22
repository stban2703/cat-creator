import { ColorType } from "./ColorType";
import { ItemType } from "./ItemType";

export type AttributeType = {
    id: number,
    attribute: string,
    checked: boolean,
    itemList: ItemType[],
    colorList: ColorType[]
}