import {makeAutoObservable} from "mobx";

class NavStore {
    cartOpenState = false
    orderingOpenState = false
    resultOpenState = false
    emptyCartOpenState = false
    selectTimeOpenState = false

    footerModalType = ""

    constructor() {
        makeAutoObservable(this)
    }

    setFooterModalType(type: string) {
        this.footerModalType = type
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

    closAll() {
        this.cartOpenState = false
        this.orderingOpenState = false
        this.selectTimeOpenState = false
        this.resultOpenState = false
    }
}

export default new NavStore()