import {makeAutoObservable} from "mobx";
import {IVariant} from "../model/IVariant";

class CartStore {
    variants: IVariant[] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    addVariant(variant: IVariant) {
        this.variants.push(variant)
    }

    removeVariant(variant: IVariant) {
        this.variants = this.variants.filter(v => v.id !== variant.id)
    }

    get cartCount() {
        return this.variants.length
    }
}

export default new CartStore()