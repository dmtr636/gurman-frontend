import {makeAutoObservable} from "mobx";
import axios from "axios";
import {SERVER_HOST} from "../constants/constants";

export const NOT_CHECKED = 0
export const CHECKING = 1
export const EXISTS = 2
export const NOT_EXISTS = 3

class PromoCodeStore {
    code = ""
    discount = 0
    exists = false
    status = NOT_CHECKED

    constructor() {
        makeAutoObservable(this)
    }

    setPromoCode(code: string) {
        this.code = code
        if (this.status !== CHECKING) {
            this.status = NOT_CHECKED
            this.discount = 0
            this.exists = false
        }
    }

    checkPromoCode(code: string) {
        this.status = CHECKING
        this.code = code
        axios.get(
            SERVER_HOST + "/check-promo-code",
            { params: { code: code } }
        ).then(res => {
            if (res.data["exists"] === true) {
                this.exists = true
                this.discount = res.data["discount"]
                this.status = EXISTS
            } else {
                this.exists = false
                this.discount = 0
                this.status = NOT_EXISTS
            }
        })
    }
}

export default new PromoCodeStore()