import {IProduct} from "./IProduct";

export interface IVariant {
    id: number,
    name: string,
    composition: string,
    cost: number,
    cartCount: number,
}