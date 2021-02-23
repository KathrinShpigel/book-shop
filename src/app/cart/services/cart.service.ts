import { Injectable } from '@angular/core';

import { ICartItem } from '../models/cartModel';
import { IBook } from '../../book/models/bookModel';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  productsList: ICartItem[];
  totalQuantity: number;
  totalSum: number;

  constructor(
    public lsService: LocalStorageService,
  ) {
    if ('productsList' in localStorage) {
      this.productsList = this.lsService.getItem('productsList');
      this.updateCartData();
    } else {
      this.productsList = [];
    }
  }

  addBook(product: IBook): void {
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
    this.lsService.setItem('productsList', this.productsList);
    this.updateCartData();
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

  updateCartData(): void {
    this.totalQuantity = this.calcCount();
    this.totalSum = this.calcCost();
  }

  decreaseQuantity(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList[index].count--;
      if (this.productsList[index].count === 0) {
        console.log('hi!')
        this.productsList.splice(index, 1);
      }
    }
    this.lsService.setItem('productsList', this.productsList);
    this.updateCartData();
  }

  increaseQuantity(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList[index].count++;
    }
    this.lsService.setItem('productsList', this.productsList);
    this.updateCartData();
  }

  removeBook(targetData: ICartItem): void {
    const index = this.productsList.findIndex(el => el.id === targetData.id);

    if (index !== -1) {
      this.productsList.splice(index, 1);
    }
    this.lsService.setItem('productsList', this.productsList);
    this.updateCartData();
  }

  alert(): void {
    alert('Ваша корзина пока пуста, но Вы можете в нее положить любой из понравившихся товаров!')
  }

  submit(): void {
    this.productsList = [];
    this.lsService.removeItem('productsList');
    this.updateCartData();
  }

}
