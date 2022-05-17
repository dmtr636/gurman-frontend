import {makeAutoObservable} from "mobx";
import Swiper from "swiper";

class NavStore {
    cartOpenState = false
    orderingOpenState = false
    resultOpenState = false
    emptyCartOpenState = false
    selectTimeOpenState = false

    footerModalType = ""
    categoryId = 0
    menuOpenState = false

    navSwiper: Swiper|null = null

    constructor() {
        makeAutoObservable(this)
    }

    setNavSwiper(swiper: Swiper) {
        this.navSwiper = swiper
    }

    back() {
        if (this.orderingOpenState) {
            this.orderingOpenState = false
            return;
        }
        if (this.selectTimeOpenState) {
            this.selectTimeOpenState = false
            return
        }
        if (this.cartOpenState) {
            this.cartOpenState = false
        }
    }

    get backButtonVisible() {
        return this.cartOpenState;
    }

    openMenu() {
        this.menuOpenState = true
    }

    closeMenu() {
        this.menuOpenState = false
    }

    setCategoryId(categoryId: number, updateSwiper?:boolean) {
        this.categoryId = categoryId
        if (this.navSwiper != null && updateSwiper !== false) {
            this.navSwiper.slideTo(categoryId)
        }
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