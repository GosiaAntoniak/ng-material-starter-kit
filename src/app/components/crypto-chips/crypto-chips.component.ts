import {ChangeDetectionStrategy, Component, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {CryptoChipsService} from "../../services/crypto-chips.service";
import {CryptoChipsModel} from "../../models/crypto-chips.model";

@Component({
  selector: 'app-crypto-chips',
  styleUrls: ['./crypto-chips.component.scss'],
  templateUrl: './crypto-chips.component.html',
  encapsulation: ViewEncapsulation.Emulated,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CryptoChipsComponent {
  readonly cryptoChips$: Observable<CryptoChipsModel[]> = this.cryptoChipsService.getAll();

  constructor(private cryptoChipsService: CryptoChipsService) {
  }
}
