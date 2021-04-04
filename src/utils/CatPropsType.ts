import { CatAttributeType } from "./CatAttributeType";

export type CatPropsType = {
    id: string,
    catName: string,
    creationDate: number,
    settings: CatAttributeType[];
}