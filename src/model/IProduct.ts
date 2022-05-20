import {IVariant} from './IVariant'

export interface IProduct {
    id: number,
    name: string,
    image: string,
    variants: IVariant[],
    category: number,
    portion: number,
    activeVariant: IVariant,
    expanded: boolean,
    onSale: boolean,
    discount: number,
    unit: string
}