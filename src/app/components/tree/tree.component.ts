import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import TLV from 'node-tlv';

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
  @Input() treeData!: TLV;

  constructor() {
    console.log('called', this.treeData);
    // this.data[0].
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.treeData = changes.treeData.currentValue;
    console.log('Changes: ', this.treeData);
  }
}
