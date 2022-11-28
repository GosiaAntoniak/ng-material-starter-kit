import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductTableModel } from '../../models/product-table.model';
import { ProductTableService } from '../../services/product-table.service';

@Component({
  selector: 'app-product-table',
  styleUrls: ['./product-table.component.scss'],
  templateUrl: './product-table.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTableComponent {
  readonly table$: Observable<ProductTableModel[]> = this._productTableService.getAll();
  public displayedColumns: string[] = ['image', 'title', 'category', 'price'];

  constructor(private _productTableService: ProductTableService) {
  }
}
