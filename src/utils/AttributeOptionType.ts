import { ColorItemType } from "./ColorItemType";
import { TypeItemType } from "./TypeItemType";

export type AttributeOptionType = {
    id: string,
    url: string,
    checked: boolean,
    itemList: TypeItemType[],
    colorList: ColorItemType[]
}