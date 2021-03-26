import { CatAttributeType } from "./CatAttributeType";

export type CatPropsType = {
    id: number,
    catName: string,
    creationDate: number,
    settings: CatAttributeType[];
}