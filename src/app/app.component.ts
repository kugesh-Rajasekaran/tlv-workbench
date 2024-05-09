import { Component, ElementRef } from '@angular/core';
import { StorageHelper } from './utils/storage';
import TLV from 'node-tlv-upgraded';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  tlv: string | null;
  tlvHistory: string[];
  tlvNodes!: TLV;
  tlvString!: string;

  constructor(private el: ElementRef) {
    this.tlv = null;
    this.tlvHistory = StorageHelper.tlvs;
    localStorage.setItem('tlv-history', '[]');
    // this.tlvString = this.tlvHistory[this.tlvHistory.length - 1];
    // this.tlvNodes = TLV.parse(this.tlvHistory[this.tlvHistory.length - 1]);
  }

  onRemoveTlv() {
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
    this.onItemClick(resultTLV);
  }

  onItemClick(tlv: string) {
    console.log('onItemClick', TLV.parse(tlv));
    try {
      this.tlvString = tlv;
      this.tlvNodes = TLV.parse(tlv);
    } catch (e) {}
  }
}
