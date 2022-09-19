import {makeAutoObservable} from "mobx";
import {ICartItem} from "../model/ICartItem";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import promoCodeStore from "./promoCodeStore";
import productStore from "./productStore";

class CartStore {
    currentId = 1
    items: ICartItem[] = []

    constructor() {
        makeAutoObservable((this))
    }

    generateId() {
        return this.currentId++
    }

    addItem(product: IProduct, variant: IVariant, additionsIds?: number[], isBigPortion?: boolean, amount?: number) {
        this.items.push({
            id: this.generateId(),
            product: product,
            variant: variant,
            amount: amount || 1,
            additionsIds: additionsIds,
            isBigPortion: isBigPortion
        })
    }

    removeItem(id: number) {
        this.items = this.items.filter(item => item.id !== id)
    }

    removeVariant(variant: IVariant) {
        this.items = this.items.filter(item => item.variant.id !== variant.id)
    }

    incAmount(item: ICartItem) {
        item.amount++
    }

    decAmount(item: ICartItem) {
        item.amount--
        if (item.amount === 0) {
            this.removeItem(item.id!)
        }
    }

    decVariantAmount(product: IProduct, variant: IVariant) {
        if (product.additions.length > 0 || product.bigPortionAvailable) {
            this.items = this.items.filter(item =>
                item.id !== this.items.reverse().find(item => item.variant.id === variant.id)!.id
            )
        } else {
            if (this.items.find(item => item.variant.id === variant.id)!.amount-- === 1) {
                this.removeVariant(variant)
            }
        }
    }

    incVariantAmount(product: IProduct, variant: IVariant) {
        this.items.find(item => item.variant.id === variant.id)!.amount++
    }

    isVariantInCart(variant: IVariant) {
        return this.items.filter(item => item.variant.id === variant.id).length > 0
    }

    getVariantAmount(product: IProduct, variant: IVariant) {
        if (product.additions.length > 0 || product.bigPortionAvailable) {
            return this.items.filter(item => item.variant.id === variant.id).length
        } else {
            return this.items.find(item => item.variant.id === variant.id)!.amount
        }
    }

    getItemCost(item: ICartItem) {
        let itemCost = 0
        if (item.product.onSale) {
            itemCost += item.variant.cost * (100 - item.product.discount) / 100
        } else {
            itemCost += item.variant.cost
        }
        item.additionsIds?.forEach(additionId => {
            let addition = productStore.getAddition(item.product, additionId)
            itemCost += addition!.cost
        })
        if (item.isBigPortion) {
            itemCost += item.product.bigPortionCost
        }
        itemCost *= item.amount
        return itemCost
    }

    clearCart() {
        this.items = []
    }

    get cartAmount() {
        return this.items.length
    }

    get cartCost() {
        let cost = 0
        this.items.forEach(item => {
            cost += this.getItemCost(item)
        })
        cost *= (100 - promoCodeStore.discount) / 100

        return Math.round(cost)
    }

    get totalCost() {
        if (this.cartCost >= 800) {
            return this.cartCost
        } else {
            return this.cartCost + 200
        }
    }
}

export default new CartStore()