import {SERVER_HOST} from "../constants/constants";
import axios from "axios";
import productStore from "../store/productStore";
import promoCodeStore from "../store/promoCodeStore";
import orderStore, {ONLINE} from "../store/orderStore";

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

    productStore.cartItems.forEach(item => {
        products.push({
            productId: item.product.id,
            variantId: item.variant.id,
            amount: item.variant.cartCount,
            additionsIds: item.variant.additions
                .filter(addition => addition.selected)
                .map(addition => addition.id),
            isBigPortion: item.variant.isBigPortion
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