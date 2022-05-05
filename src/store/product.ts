import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";

class Product {
    products: IProduct[] = []

    constructor() {
        makeAutoObservable(this, {}, {deep: true})
    }

    fetchProducts() {
        axios.get("http://localhost:8000/products")
            .then(response => {
                let products = response.data["products"]
                products.forEach((product: IProduct) => {
                    product.activeVariant = product.variants[0]
                    product.variants.forEach((variant: IVariant) => variant.cartCount = 0)
                })
                this.products = products
            })
    }

    toggleInCartState(variant: IVariant) {
        if (variant.cartCount === 0) {
            variant.cartCount = 1
        } else {
            variant.cartCount = 0
        }
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

export default new Product()