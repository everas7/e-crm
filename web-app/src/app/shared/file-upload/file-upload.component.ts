import {
  Component,
  OnInit,
  Input,
  forwardRef,
  EventEmitter,
  Output,
} from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css'],
})
export class FileUploadComponent implements OnInit {
  @Input() multiple = false;
  @Input() disabled = false;
  @Input() files;
  @Output() filesChange = new EventEmitter();
  constructor() {}

  ngOnInit() {}
  selectFile(event) {
    this.files = event.target.files;
    this.filesChange.emit(this.files);
    console.log(this.files, 'waht now')

  }
}
