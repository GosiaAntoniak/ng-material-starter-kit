import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CategoriesListComponent } from './components/categories-list/categories-list.component';
import { CryptoChipsComponent } from './components/crypto-chips/crypto-chips.component';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { CreateProductFormComponent } from './components/create-product-form/create-product-form.component';
import { EmployeeFormComponent } from './components/employee-form/employee-form.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { ProductListComponentModule } from './components/product-list/product-list.component-module';
import { ProductsServiceModule } from './services/products.service-module';
import { CategoriesListComponentModule } from './components/categories-list/categories-list.component-module';
import { CategoriesServiceModule } from './services/categories.service-module';
import { CryptoChipsComponentModule } from './components/crypto-chips/crypto-chips.component-module';
import { CryptoChipsServiceModule } from './services/crypto-chips.service-module';
import { ProductTableComponentModule } from './components/product-table/product-table.component-module';
import { ProductTableServiceModule } from './services/product-table.service-module';
import { CreateProductFormComponentModule } from './components/create-product-form/create-product-form.component-module';
import { CreateProductFormServiceModule } from './services/create-product-form.service-module';
import { EmployeeFormComponentModule } from './components/employee-form/employee-form.component-module';
import { EmployeeFormServiceModule } from './services/employee-form.service-module';
import { LoginFormComponentModule } from './components/login-form/login-form.component-module';
import { LoginFormServiceModule } from './services/login-form.service-module';

@NgModule({
  imports: [RouterModule.forRoot([
    { path: 'products', component: ProductListComponent },
    { path: 'categories', component: CategoriesListComponent },
    { path: 'cryptoChips', component: CryptoChipsComponent },
    { path: 'productTable', component: ProductTableComponent },
    { path: 'create-productForm', component: CreateProductFormComponent },
    { path: 'create-employeeForm', component: EmployeeFormComponent },
    { path: 'create-loginForm', component: LoginFormComponent }
  ]), ProductListComponentModule, ProductsServiceModule, CategoriesListComponentModule, CategoriesServiceModule, CryptoChipsComponentModule, CryptoChipsServiceModule, ProductTableComponentModule, ProductTableServiceModule, CreateProductFormComponentModule, CreateProductFormServiceModule, EmployeeFormComponentModule, EmployeeFormServiceModule, LoginFormComponentModule, LoginFormServiceModule],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
