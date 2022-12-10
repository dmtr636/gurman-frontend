import {makeAutoObservable} from "mobx";
import Swiper from "swiper";
import {IProduct} from "../model/IProduct";

class NavStore {
    cartOpenState = false
    orderingOpenState = false
    resultOpenState = false
    emptyCartOpenState = false
    selectTimeOpenState = false
    loadingOpenState = false

    footerModalType = ""
    menuOpenState = false

    navSwiper: Swiper|null = null

    navIndex = 0

    siteOpenState = true

    siteClosedModalOpen = false

    additionsModalOpen = false
    additionsModalProduct: IProduct | null = null

    constructor() {
        makeAutoObservable(this)

        setInterval(() => {
            this.navSwiper?.updateAutoHeight()
        }, 100)
    }

    openSiteClosedModal() {
        this.siteClosedModalOpen = true
    }
    closeSiteClosedModal() {
        this.siteClosedModalOpen = false
    }

    openAdditionsModal(product: IProduct) {
        this.additionsModalProduct = product
        this.additionsModalOpen = true
    }
    closeAdditionsModal() {
        this.additionsModalOpen = false
    }

    setSiteOpenState(state: boolean) {
        this.siteOpenState = state
    }

    setNavSwiper(swiper: Swiper) {
        this.navSwiper = swiper
    }

    setNavIndex(index: number, updateSwiper?:boolean) {
        this.navIndex = index
        if (this.navSwiper != null && updateSwiper) {
            this.navSwiper.slideTo(index)
        }
        if (this.backButtonVisible) {
            this.back()
        }
    }

    back() {
        if (this.footerModalType !== "") {
            this.footerModalType = ""
            return;
        }
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
        if (this.additionsModalOpen) {
            this.additionsModalOpen = false
            this.additionsModalProduct!.activeVariant.cartCount = 0
        }
        if (this.siteClosedModalOpen) {
            this.siteClosedModalOpen = false
        }
    }

    get backButtonVisible() {
        return this.cartOpenState || this.footerModalType !== "" || this.additionsModalOpen || this.siteClosedModalOpen;
    }

    openMenu() {
        this.menuOpenState = true
    }

    closeMenu() {
        this.menuOpenState = false
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

    openLoading() {
        this.loadingOpenState = true
    }
    closeLoading() {
        this.loadingOpenState = false
    }

    closAll() {
        this.cartOpenState = false
        this.orderingOpenState = false
        this.selectTimeOpenState = false
        this.resultOpenState = false
    }
}

export default new NavStore()