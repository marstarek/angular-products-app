import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginComponent } from './login/login.component';
import { ProductCardsComponent } from './product-cards/product-cards.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { StoreModule } from '@ngrx/store';
import { wishlistReducer } from './store/wishlist/wishlist.reducer';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    RegisterComponent,
    HeaderComponent,
    NavbarComponent,
    LoginComponent,
    ProductCardsComponent,
    ProductDetailsComponent,
    CartComponent,
    WishlistComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({ wishlist: wishlistReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
