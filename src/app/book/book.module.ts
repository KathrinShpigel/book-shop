import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './components/book/book.component';
import { BookListComponent } from './components/book-list/book-list.component';

@NgModule({
  declarations: [BookComponent, BookListComponent],
  imports: [
    CommonModule,
  ]
})
export class BookModule { }
