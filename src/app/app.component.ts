import { Component, ElementRef } from '@angular/core';
import { StorageHelper } from './utils/storage';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tlv: string | null;
  tlvHistory: string[];

  constructor(private el: ElementRef) {
    this.tlv = null;
    this.tlvHistory = StorageHelper.tlvs;
  }

  onRemoveTlv() {
    console.log('Checked...');
    this.tlvHistory = [];
    localStorage.setItem('tlv-history', '[]');
  }

  onSubmitTlv(event: KeyboardEvent) {
    console.log('onSubmitTlv');
    if (event.key !== 'Enter') return;
    event.preventDefault();
    const resultTLV = this.tlv?.replace(' ', '').replace('\n', '');
    if (!resultTLV) return;
    StorageHelper.addTlv(resultTLV);
    this.tlvHistory.push(resultTLV);
    this.tlv = null;
  }

  onItemClick(tlv: string) {
    console.log('onItemClick');
  }
}
