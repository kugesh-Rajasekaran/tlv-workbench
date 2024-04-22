import { Component } from '@angular/core';
import { StorageHelper } from './utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tlv: string | null;
  tlvHistory: string[];

  constructor() {
    this.tlv = null;
    this.tlvHistory = StorageHelper.tlvs;
  }

  onRemoveTlv() {
    console.log('Checked...');
    this.tlvHistory = [];
    localStorage.setItem('tlv-history', '[]');
  }

  onSubmitTlv() {
    const resultTLV = this.tlv?.replace(' ', '').replace('\n', '');
    if (!resultTLV) return;
    const stored = StorageHelper.addTlv(resultTLV);
  }
}
