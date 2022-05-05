import {IVariant} from './IVariant'

export interface IProduct {
    name: string,
    image: string,
    variants: IVariant[],
    category: number,
    portion: number
}