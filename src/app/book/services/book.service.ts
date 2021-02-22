import { Injectable } from '@angular/core';

import { IBook } from '../models/bookModel';
import { CartService } from '../../cart/services/cart.service';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    public cartService: CartService,
  ) {}

  buy(targetData: IBook): void {
    this.cartService.addProductToCart(targetData);
  }
}
