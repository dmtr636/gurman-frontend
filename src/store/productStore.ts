import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import {ICartItem} from "../model/ICartItem";

class ProductStore {
    products: IProduct[] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    fetchProducts() {
        axios.get("http://localhost:8000/products")
            .then(response => {
                let products = response.data["products"]
                products.forEach((product: IProduct) => {
                    product.expanded = false
                    product.variants.forEach((variant: IVariant) => variant.cartCount = 0)
                })
                this.products = products
            })
    }

    setActiveVariant(product: IProduct, variant: IVariant) {
        product.activeVariant = variant
    }

    toggleInCartState(variant: IVariant, product: IProduct) {
        if (variant.cartCount === 0) {
            variant.cartCount = 1
        } else {
            variant.cartCount = 0
        }
    }

    setExpanded(product: IProduct, isExpanded: boolean) {
        product.expanded = isExpanded
    }

    incrementCartCount(variant: IVariant) {
        variant.cartCount++
    }

    decrementCartCount(variant: IVariant) {
        variant.cartCount--
    }

    get cartItems(): ICartItem[] {
        let items: ICartItem[] = []
        this.products.forEach(product => {
            product.variants.forEach(variant => {
                if (variant.cartCount > 0) {
                    items.push({
                        product: product,
                        variant: variant,
                        amount: 0
                    })
                }
            })
        })
        return items
    }

    get cartCount() {
        let count = 0
        this.products.forEach(product => {
            product.variants.forEach(variant => {
                if (variant.cartCount > 0) {
                    count++
                }
            })
        })

        return count
    }

    get cartCost() {
        let cost = 0
        this.products.forEach(product => {
            product.variants.forEach(variant => {
                cost += variant.cartCount * variant.cost
            })
        })

        return cost
    }
}

export default new ProductStore()
