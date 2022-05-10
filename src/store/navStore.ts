import {makeAutoObservable} from "mobx";

class NavStore {
    cartOpenState = false
    orderingOpenState = false
    resultOpenState = false
    emptyCartOpenState = false
    selectTimeOpenState = false

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

    openEmptyCart() {
        this.emptyCartOpenState = true
    }

    closeEmptyCart() {
        this.emptyCartOpenState = false
    }

    openSelectTime() {
        this.selectTimeOpenState = true
    }

    closeSelectTime() {
        this.selectTimeOpenState = false
    }
}

export default new NavStore()