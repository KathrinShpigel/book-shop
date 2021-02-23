import { Injectable } from '@angular/core';

import { ICartItem } from '../models/cartModel';
import { IBook } from '../../book/models/bookModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsList: ICartItem[];

  constructor() {
    if ('productsList' in localStorage) {
      this.productsList = JSON.parse(localStorage.getItem('productsList'));
    } else {
      this.productsList = [];
    }
  }

  addProductToCart(product: IBook): void {
    const index = this.productsList.findIndex(el => el.id === product.id);

    if (index !== -1) {
      this.productsList[index].count++;
    } else {
      this.productsList.push({
        id: product.id,
        name: product.name,
        price: product.price,
        count: 1,
      });
    }

    localStorage.setItem('productsList', JSON.stringify(this.productsList));
    console.log(this.productsList);
  }

  calcCount(): number {
    if (this.productsList) {
      return this.productsList.reduce((acc, el) => acc + el.count, 0);
    }
    return 0;
  }

  calcCost(): number {
    if (this.productsList) {
      return this.productsList.reduce((acc, el) => acc + (el.price*el.count), 0);
    }
    return 0;
  }
  calcMinus(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList[index].count--;
      if (this.productsList[index].count === 0) {
        console.log('hi!')
        this.productsList.splice(index, 1);
      }
    }
    localStorage.setItem('productsList', JSON.stringify(this.productsList));
  }

  calcPlus(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList[index].count++;
    }
    localStorage.setItem('productsList', JSON.stringify(this.productsList));
  }

  deleteItem(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList.splice(index, 1);
    }
    localStorage.setItem('productsList', JSON.stringify(this.productsList));
  }

  alert(): void {
    alert('Ваша корзина пока пуста, но Вы можете в нее положить любой из понравившихся товаров!')
  }

  submit(): void {
    this.productsList = [];
    localStorage.clear;
  }

}
