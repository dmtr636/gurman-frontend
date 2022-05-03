import {makeAutoObservable} from "mobx";

class Product {
    products = []

    constructor() {
        makeAutoObservable(this)
    }
}

export default Product