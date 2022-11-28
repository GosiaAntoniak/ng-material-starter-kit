import {ProductTableComponent} from "../components/product-table/product-table.component";

export interface ProductTableModel {
  readonly id: number;
  readonly title: string;
  readonly price: string;
  readonly category: string;
  readonly description: string;
  readonly image: string;
}


