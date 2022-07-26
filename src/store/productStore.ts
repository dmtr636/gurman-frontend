import {makeAutoObservable} from "mobx";
import axios from "axios";
import {IProduct} from "../model/IProduct";
import {IVariant} from "../model/IVariant";
import {SERVER_HOST} from "../constants/constants";
import {IAddition} from "../model/IAddition";
import navStore from "./navStore";

class ProductStore {
  products: IProduct[] = []
  recommendations: IProduct[] = []

  constructor() {
    makeAutoObservable(this, {}, {deep: true})
  }

  fetchProducts() {
    axios.get(SERVER_HOST + "/products")
      .then(response => {
        let products = response.data["products"]
        products.forEach((product: IProduct) => {
          product.expanded = false
          product.variants.forEach((variant: IVariant) => {
            variant.cartCount = 0
            variant.isBigPortion = false
            variant.additions = [...product.additions]
            if (product.bigPortionAvailable) {
              variant.portions = [
                {id: 0, name: "Стандартная", cost: 0, selected: true},
                {id: 1, name: "Большая", cost: product.bigPortionCost, selected: false}
              ]
            }
          })
        })
        this.products = products.filter((product: IProduct) => product.active)
        navStore.setNavIndex(navStore.navIndex, true)
      })
  }

  fetchRecommendations() {
    axios.get(SERVER_HOST + "/recommendations")
      .then(response => {
        let products = response.data["recommendations"]
        products.forEach((product: IProduct) => {
          product.expanded = false
          product.variants.forEach((variant: IVariant) => variant.cartCount = 0)
        })
        this.recommendations = products
      })
  }

  setActiveVariant(product: IProduct, variant: IVariant) {
    product.activeVariant = variant
  }

  setExpanded(product: IProduct, isExpanded: boolean) {
    product.expanded = isExpanded
  }

  incrementCartCount(variant: IVariant) {
    variant.cartCount++
  }

  decrementCartCount(variant: IVariant) {
    variant.cartCount--
  }

  toggleAddition(addition: IAddition) {
    addition.selected = !addition.selected
  }

  getProductCost(product: IProduct) {
    let cost = product.activeVariant.cost
    if (product.onSale) {
      cost *= (100 - product.discount) / 100
    }
    product.activeVariant.additions.forEach(addition => {
      if (addition.selected) {
        cost += addition.cost
      }
    })
    if (product.activeVariant.isBigPortion) {
      cost += product.bigPortionCost
    }
    cost *= product.activeVariant.cartCount
    return Math.round(cost)
  }

  get getRecommendations() {
    let recommendations: IProduct[] = []
    let ids = this.recommendations.map(rec => rec.id)
    this.products.forEach(product => {
      if (ids.includes(product.id)) {
        recommendations.push(product)
      }
    })
    return recommendations
  }

  getAddition(product: IProduct, additionId: number) {
    return product.additions.find(addition => addition.id === additionId)
  }

  get productsOnSale() {
    return this.products.filter(product => product.onSale)
  }
}

export default new ProductStore()
