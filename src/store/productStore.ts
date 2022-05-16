import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import {ICartItem} from "../model/ICartItem";
import {SERVER_HOST} from "../constants/constants";
import promoCodeStore from "./promoCodeStore";

class ProductStore {
    products: IProduct[] = []
    recommendations: IProduct[] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    fetchProducts() {
        axios.get(SERVER_HOST + "/products")
            .then(response => {
                let products = response.data["products"]
                products.forEach((product: IProduct) => {
                    product.expanded = false
                    product.variants.forEach((variant: IVariant) => variant.cartCount = 0)
                })
                this.products = products
            })
    }

    fetchRecommendations() {
        axios.get(SERVER_HOST + "/recommendations")
            .then(response => {
                let products = response.data["recommendations"]
                products.forEach((product: IProduct) => {
                    product.expanded = false
                    product.variants.forEach((variant: IVariant) => variant.cartCount = 0)
                })
                this.recommendations = products
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

    clearCart() {
        this.products.forEach(product => {
            product.variants.forEach(variant => {
                variant.cartCount = 0
            })
        })
    }

    get getRecommendations() {
        let recommendations: IProduct[] = []
        let ids = this.recommendations.map(rec => rec.id)
        this.products.forEach(product => {
            if (ids.includes(product.id)) {
                recommendations.push(product)
            }
        })
        return recommendations
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
                if (product.onSale) {
                    cost += variant.cartCount * variant.cost * (100 - product.discount) / 100
                } else {
                    cost += variant.cartCount * variant.cost
                }
            })
        })
        cost *= (100 - promoCodeStore.discount) / 100

        return Math.round(cost)
    }

    get productsOnSale() {
        console.log(this.products.filter(product => product.onSale))
        return this.products.filter(product => product.onSale)
    }
}

export default new ProductStore()
