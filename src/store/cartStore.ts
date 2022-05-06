import {makeAutoObservable} from "mobx";
import {IVariant} from "../model/IVariant";
import {ICartItem} from "../model/ICartItem";
import {IProduct} from "../model/IProduct";

class CartStore {
    items: ICartItem[] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    addItem(variant: IVariant, product: IProduct) {
        this.items.push({
            variant: variant,
            product: product
        })
    }

    removeItem(variant: IVariant) {
        this.items = this.items.filter(item => item.variant.id !== variant.id)
    }

    get cartCount() {
        return this.items.length
    }
}

export default new CartStore()