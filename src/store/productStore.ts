import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import cart from './cartStore'

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
            cart.addItem(variant, product)
        } else {
            variant.cartCount = 0
            cart.removeItem(variant)
        }
    }

    get variantsInCartCount() {
        let count = 0
        this.products.forEach(product => {
            product.variants.forEach(variant => {
                if (variant.cartCount > 0) {
                    count++
                }
            })
        })
        console.log(count)
        console.log(this.products)
        return count
    }

    setExpanded(product: IProduct, isExpanded: boolean) {
        product.expanded = isExpanded
    }

    addToCart(variant: IVariant) {
        variant.cartCount = 1
    }

    removeFromCart(variant: IVariant) {
        variant.cartCount = 0
    }

    incCartCount(variant: IVariant) {
        variant.cartCount++
    }

    decCartCount(variant: IVariant) {
        variant.cartCount--
    }
}

export default new ProductStore()
