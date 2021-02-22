import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { IBook } from '../../models/bookModel';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss']
})
export class BookComponent implements OnInit {
  @Input() product: IBook;
  @Output() onBuy = new EventEmitter<IBook>();

  constructor() {}

  ngOnInit(): void {}

  buy(): void {
    this.onBuy.emit(this.product);
  }

}
