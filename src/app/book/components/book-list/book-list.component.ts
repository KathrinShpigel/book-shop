import { Component, OnInit } from '@angular/core';

import { BookService } from '../../services/book.service';
import { bookList } from '../../../data';
import { IBook } from '../../models/bookModel';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent implements OnInit {

  bookList: IBook[];

  constructor(
    public service: BookService
  ) { }

  ngOnInit(): void {
    this.bookList = bookList;
  }

}
