import { Injectable } from '@angular/core';

import { IBook } from '../models/bookModel';
import { CartService } from '../../cart/services/cart.service';
import { bookList } from '../../data';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(
    public cartService: CartService,
  ) {}

  getBooks(): IBook[] {
    return bookList;
  }

  buy(targetData: IBook): void {
    this.cartService.addBook(targetData);
  }
}
