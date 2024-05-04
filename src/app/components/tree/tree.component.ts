import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import TLV from 'node-tlv-upgraded';
import { Clipboard } from '@angular/cdk/clipboard';
import { StorageHelper } from 'src/app/utils/storage';

// interface TreeNode {
//   key: string;
//   children?: TreeNode[];
// }

@Component({
  selector: 'app-tree-chart',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeChartComponent implements OnChanges {
  @Input() tlvString!: string;
  @Input() treeData!: TLV;
  editing: boolean = false;
  copied = false;
  copyOnEdit: boolean;

  @ViewChild('inputElement') inputElement!: ElementRef;

  constructor(private clipboard: Clipboard) {
    this.copyOnEdit = StorageHelper.copyOnEdit;
    this.treeData = TLV.parse(this.tlvString);
    // this.data[0].
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.treeData = changes.treeData.currentValue;
    console.log('Changes: ', this.treeData);
    // this.treeData.getValue;
  }

  editComplete(node: TLV) {
    console.log('editComplete', { tlv: this.tlvString, node });
    this.editing = false;
    this.tlvString = TLV.update(this.tlvString, node.tag, node.value);
    console.log('editComplete 1', this.tlvString);
    this.treeData = TLV.parse(this.tlvString);
    this.copyToClipboard(this.tlvString);
  }

  changeCopyOnEdit() {
    this.copyOnEdit = !this.copyOnEdit;

    console.log('changeCopyOnEdit', this.copyOnEdit);
    StorageHelper.changeCopyOnEdit(this.copyOnEdit);
    console.log('RESULT', StorageHelper.copyOnEdit);
  }

  copyBase64(tlv: string) {
    console.log('copyBase64');
    this.copyToClipboard(Buffer.from(tlv).toString('base64'));
  }

  copyToClipboard(input: string) {
    this.clipboard.copy(input);
    this.copied = true;
    setTimeout(() => {
      this.copied = false;
    }, 2000);
  }
}
