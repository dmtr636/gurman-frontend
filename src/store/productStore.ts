import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import {ICartItem} from "../model/ICartItem";
import {SERVER_HOST} from "../constants/constants";
import promoCodeStore from "./promoCodeStore";
import {IAddition} from "../model/IAddition";

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
                    product.variants.forEach((variant: IVariant) => {
                        variant.cartCount = 0
                        variant.isBigPortion = false
                        variant.additions = [...product.additions]
                        if (product.bigPortionAvailable) {
                            variant.portions = [
                                {id: 0, name: "Стандартная", cost: 0, selected: true},
                                {id: 1, name: "Большая", cost: product.bigPortionCost, selected: false}
                            ]
                        }
                    })
                })
                this.products = products.filter((product: IProduct) => product.active)
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
            return true
        } else {
            variant.cartCount = 0
            return false
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

    toggleAddition(addition: IAddition) {
        addition.selected = !addition.selected
    }

    getProductCost(product: IProduct) {
        let cost = product.activeVariant.cost
        if (product.onSale) {
            cost *= (100 - product.discount) / 100
        }
        product.activeVariant.additions.forEach(addition => {
            if (addition.selected) {
                cost += addition.cost
            }
        })
        if (product.activeVariant.isBigPortion) {
            cost += product.bigPortionCost
        }
        cost *= product.activeVariant.cartCount
        return Math.round(cost)
    }

    getVariantCost(product: IProduct, variant: IVariant) {
        let cost = variant.cost
        if (product.onSale) {
            cost *= (100 - product.discount) / 100
        }
        variant.additions.forEach(addition => {
            if (addition.selected) {
                cost += addition.cost
            }
        })
        if (variant.isBigPortion) {
            cost += product.bigPortionCost
        }
        cost *= variant.cartCount
        return Math.round(cost)
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
                let variantCost = 0
                if (product.onSale) {
                    variantCost += variant.cost * (100 - product.discount) / 100
                } else {
                    variantCost += variant.cost
                }
                variant.additions.forEach(addition => {
                    if (addition.selected) {
                        variantCost += addition.cost
                    }
                })
                if (variant.isBigPortion) {
                    variantCost += product.bigPortionCost
                }
                variantCost *= variant.cartCount
                cost += variantCost
            })
        })
        cost *= (100 - promoCodeStore.discount) / 100

        return Math.round(cost)
    }

    getAddition(product: IProduct, additionId: number) {
        return product.additions.find(addition => addition.id === additionId)
    }

    get totalCost() {
        if (this.cartCost >= 800) {
            return this.cartCost
        } else {
            return this.cartCost + 200
        }
    }

    get productsOnSale() {
        return this.products.filter(product => product.onSale)
    }
}

export default new ProductStore()
