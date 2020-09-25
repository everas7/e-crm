import { Component, OnInit, Input } from '@angular/core';

export interface ListViewItem {
  header: string;
  content: string;
}

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent implements OnInit {
  @Input() header: string;
  @Input() items: ListViewItem[];
  constructor() { }

  ngOnInit() {
  }

}
