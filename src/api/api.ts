import {SERVER_HOST} from "../constants/constants";
import axios from "axios";
import productStore from "../store/productStore";
import promoCodeStore from "../store/promoCodeStore";
import orderStore, {ONLINE} from "../store/orderStore";
import cartStore from "../store/cartStore";

export function postOrder() {
    let order: any = {
        promoCode: promoCodeStore.code,
        cookingTime: orderStore.cookingTime,
        name: orderStore.name,
        phone: orderStore.phone,
        receiveWay: orderStore.receiveWay,
        street: orderStore.street,
        house: orderStore.house,
        entrance: orderStore.entrance,
        flat: orderStore.flat,
        floor: orderStore.floor,
        comment: orderStore.comment,
        paymentType: orderStore.paymentType
    }

    let products: {
        productId: number;
        variantId: number;
        amount: number;
        additionsIds: number[];
        isBigPortion: boolean
    }[] = []

    cartStore.items.forEach(item => {
        products.push({
            productId: item.product.id,
            variantId: item.variant.id,
            amount: item.amount,
            additionsIds: item.additionsIds || [],
            isBigPortion: item.isBigPortion || false
        })
    })

    order['products'] = products

    axios.post(SERVER_HOST + "/orders", order)
        .then(res => {
            if (order.paymentType === ONLINE) {
                localStorage.setItem("payment_id", res.data['payment_id'])
                window.location.href = res.data['confirmation_url']
            }
        })
}