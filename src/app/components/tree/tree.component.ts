import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
})
export class TreeComponent {
  nodes: Node[] = [
    { id: 1, x: 100, y: 100, text: 'Node 1' },
    { id: 2, x: 300, y: 200, text: 'Node 2' },
    // Add more nodes as needed
  ];

  lines: Line[] = [
    { from: this.nodes[0], to: this.nodes[1] },
    // Add more lines as needed
  ];

  updateNodeText(node: Node) {
    // Update the node text in the data model
    const index = this.nodes.findIndex((n) => n.id === node.id);
    if (index !== -1) {
      this.nodes[index].text = node.text;
    }
  }

  getCurvedLine(line: Line) {
    const x1 = line.from.x;
    const y1 = line.from.y;
    const x2 = line.to.x;
    const y2 = line.to.y;

    const dx = x2 - x1;
    const dy = y2 - y1;
    const len = Math.sqrt(dx * dx + dy * dy);
    const radius = len / 2;

    const midX = (x1 + x2) / 2;
    const midY = (y1 + y2) / 2;

    const angle = Math.atan2(dy, dx);
    const xOffset = radius * Math.cos(angle - Math.PI / 2);
    const yOffset = radius * Math.sin(angle - Math.PI / 2);

    return `M${x1},${y1} Q${midX + xOffset},${midY + yOffset} ${x2},${y2}`;
  }
}

interface Node {
  id: number;
  x: number;
  y: number;
  text: string;
}

interface Line {
  from: Node;
  to: Node;
}
