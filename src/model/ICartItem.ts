import {IProduct} from "./IProduct";
import {IVariant} from "./IVariant";

export interface ICartItem {
    id?: number,
    product: IProduct,
    variant: IVariant,
    amount: number,
    additionsIds? : number[],
    isBigPortion? : boolean
}