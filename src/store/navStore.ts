import {makeAutoObservable} from "mobx";

class NavStore {
    cartOpenState = false
    orderingOpenState = false
    resultOpenState = false

    constructor() {
        makeAutoObservable(this)
    }

    openCart() {
        this.cartOpenState = true
    }

    closeCart() {
        this.cartOpenState = false
    }

    openOrdering() {
        this.orderingOpenState = true
    }

    closeOrdering() {
        this.orderingOpenState = false
    }

    openResult() {
        this.resultOpenState = true
    }

    closeResult() {
        this.resultOpenState = false
    }
}

export default new NavStore()