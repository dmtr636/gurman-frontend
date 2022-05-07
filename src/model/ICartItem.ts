import {IProduct} from "./IProduct";
import {IVariant} from "./IVariant";

export interface ICartItem {
    product: IProduct,
    variant: IVariant,
    amount: number
}