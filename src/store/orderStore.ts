import {makeAutoObservable} from "mobx";

export const DELIVERY = "DELIVERY"
export const PICKUP = "PICKUP"
export const ONLINE = "ONLINE"
export const CHECKOUT = "CHECKOUT"

class OrderStore {
    name = ""
    phone = ""
    receiveWay = DELIVERY
    street = ""
    house = ""
    entrance = ""
    flat = ""
    comment = ""
    paymentType = ONLINE

    constructor() {
        makeAutoObservable(this)
    }

    setName(name: string) {
        this.name = name
    }
    setPhone(phone: string) {
        this.phone = phone
    }
    setReceiveWay(receiveWay: string) {
        this.receiveWay = receiveWay
    }
    setStreet(street: string) {
        this.street = street
    }
    setHouse(house: string) {
        this.house = house
    }
    setEntrance(entrance: string) {
        this.entrance = entrance
    }
    setFlat(flat: string) {
        this.flat = flat
    }
    setComment(comment: string) {
        this.comment = comment
    }
    setPaymentType(paymentType: string) {
        this.paymentType = paymentType
    }
}

export default new OrderStore()