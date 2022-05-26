import {IVariant} from './IVariant'
import {IAddition} from "./IAddition";

export interface IProduct {
    id: number,
    name: string,
    image: string,
    variants: IVariant[],
    additions: IAddition[],
    category: number,
    portion: number,
    activeVariant: IVariant,
    expanded: boolean,
    onSale: boolean,
    discount: number,
    unit: string,
    bigPortionAvailable: boolean,
    bigPortionCost: number
}