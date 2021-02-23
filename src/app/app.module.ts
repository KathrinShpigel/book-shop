import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BookListComponent } from './book/components/book-list/book-list.component';
import { BookComponent } from './book/components/book/book.component';
import { CartComponent } from './cart/components/cart/cart.component';
import { CartItemComponent } from './cart/components/cart-item/cart-item.component';
import { AboutComponent } from './layout/components/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookComponent,
    CartComponent,
    CartItemComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
