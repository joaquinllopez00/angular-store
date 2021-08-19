import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
})
export class ZippyComponent {
  @Input('title') title: string;
  expanded: boolean = false;

  expandDropdown() {
    this.expanded = !this.expanded;
    console.log(this.expanded);
  }
}
