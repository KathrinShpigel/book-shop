import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ICartItem } from '../../models/cartModel';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent implements OnInit {

  @Input() product: ICartItem;
  @Output() onMinus = new EventEmitter<ICartItem>();
  @Output() onPlus = new EventEmitter<ICartItem>();
  @Output() onDelete = new EventEmitter<ICartItem>();

  constructor() { }

  ngOnInit(): void {
  }

  pushMinus(): void {
    this.onMinus.emit(this.product);
  }

  pushPlus(): void {
    this.onPlus.emit(this.product);
  }

  pushDelete(): void {
    this.onDelete.emit(this.product);
  }

}
