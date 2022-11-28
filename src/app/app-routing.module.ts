import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { ProductTableServiceModule } from './services/product-table.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesListComponent },
    { path: 'cryptoChips', component: CryptoChipsComponent },
    { path: 'productTable', component: ProductTableComponent }
  ]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, ProductTableComponentModule, ProductTableServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
