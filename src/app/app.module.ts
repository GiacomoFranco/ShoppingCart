import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HeaderComponent } from './header/header.component';
import { PipeTestComponent } from './pipe-test/pipe-test.component';
import { NavDrawerComponent } from './nav-drawer/nav-drawer.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { CatalogModule } from './catalog/catalog.module';
import { ShoppingCartModule } from './shopping-cart/shopping-cart.module';
import { ContactModule } from './contact/contact.module';
import { PipeTestModule } from './pipe-test/pipe-test.module';
import { ProductDetailsComponent } from './catalog/product-details/product-details.component';

//Generando las rutas

const routes : Routes = [
  {
    path: 'catalog',
    component: CatalogComponent
  },
  {
    path: 'catalog/products/:id',
    component: ProductDetailsComponent
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'pipes',
    component: PipeTestComponent,
  },
  {
    path: 'detail',
    component: ProductDetailsComponent,
  },
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavDrawerComponent,
  ],
  imports: [
    BrowserModule,
    CatalogModule,
    ShoppingCartModule,
    ContactModule,
    PipeTestModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
