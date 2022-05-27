import {IProduct} from "./IProduct";
import {IAddition} from "./IAddition";

export interface IVariant {
    id: number,
    name: string,
    composition: string,
    cost: number,
    cartCount: number,
    additions: IAddition[],
    isBigPortion: boolean,
    portions: IAddition[]
}