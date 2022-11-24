import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CategoriesListComponent} from './categories-list.component';
import {MatCardModule} from "@angular/material/card";
import {MatListModule} from "@angular/material/list";
import {MatCheckboxModule} from "@angular/material/checkbox";

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatCheckboxModule
  ],
  declarations: [CategoriesListComponent],
  providers: [],
  exports: [CategoriesListComponent]
})
export class CategoriesListComponentModule {
}
