import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { ShoppingCartItemComponent } from './shopping-cart/shopping-cart-item.component';
import { CatalogComponentComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { CatalogProductComponentComponent } from './catalog/catalog-product.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { FilterOrdersPipe } from './filter-orders.pipe';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingCartComponent,
    ShoppingCartItemComponent,
    CatalogComponentComponent,
    HeaderComponent,
    CatalogProductComponentComponent,
    PipeTestComponent,
    FilterOrdersPipe,
    NavDrawerComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
