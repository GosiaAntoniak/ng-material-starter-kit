import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { ProductTableComponent } from './product-table.component';
import {MatTableModule} from "@angular/material/table";

@NgModule({
    imports: [MatCardModule, MatListModule, CommonModule, MatTableModule],
  declarations: [ProductTableComponent],
  providers: [],
  exports: [ProductTableComponent]
})
export class ProductTableComponentModule {
}

export class displayedColumns {

}
