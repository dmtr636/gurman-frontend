import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";

class Product {
    products: IProduct[] = []

    constructor() {
        makeAutoObservable(this)
    }

    fetchProducts() {
        axios.get("http://localhost:8000/products")
            .then(response => {
                this.products = response.data["products"]
            })
    }
}

export default new Product()