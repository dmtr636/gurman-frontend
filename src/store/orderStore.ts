import {makeAutoObservable} from "mobx";

export const DELIVERY = "DELIVERY"
export const PICKUP = "PICKUP"
export const ONLINE = "ONLINE"
export const CHECKOUT = "CHECKOUT"
export const CASH_COURIER = "CASH_COURIER"
export const CARD_COURIER = "CARD_COURIER"

class OrderStore {
    name = localStorage.getItem("name") || ""
    phone = localStorage.getItem("phone") || ""
    receiveWay = localStorage.getItem("receiveWay") || DELIVERY
    street = localStorage.getItem("street") || ""
    house = localStorage.getItem("house") || ""
    entrance = localStorage.getItem("entrance") || ""
    flat = localStorage.getItem("flat") || ""
    floor = localStorage.getItem("floor") || ""
    comment = ""
    paymentType = CHECKOUT
    cookingTime: string = ""

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
        this.paymentType = ONLINE
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
    setCookingTime(time: string) {
        this.cookingTime = time
    }
    setFloor(floor: string) {
        this.floor = floor
    }

    saveToLocalStorage() {
        localStorage.setItem("name", this.name)
        localStorage.setItem("phone", this.phone)
        localStorage.setItem("receiveWay", this.receiveWay)
        localStorage.setItem("street", this.street)
        localStorage.setItem("house", this.house)
        localStorage.setItem("entrance", this.entrance)
        localStorage.setItem("flat", this.flat)
        localStorage.setItem("floor", this.floor)
    }
}

export default new OrderStore()
