import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
})
export class DialogComponent implements OnInit {
  @Input() header: string;
  @Input() display: boolean;
  @Input() modal = true;
  @Input() closable = true;
  @Input() width = '70%';
  @Output() onClose = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  onHide() {
    this.display = false;
    this.onClose.emit();
  }
}
