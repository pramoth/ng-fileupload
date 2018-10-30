import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-upload',
  templateUrl: './my-upload.component.html',
  styleUrls: ['./my-upload.component.css']
})
export class MyUploadComponent implements OnInit {
  isAttachFile = true;
  @ViewChild('file')
  __file: ElementRef;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
  }

  get file() {
    return this.__file;
  }

  set file(file) {
    console.log(typeof file);
    console.log(file);
    this.__file = file;
  }

  handleFile(files: FileList) {
    const formData: FormData = new FormData();
    for (let i = 0; i < files.length; i++) {
      console.log(files[i]);
      formData.append(`file`, files[i], files[i].name);
    }
    this.http.post('upload', formData).subscribe(e => {
    }, err => console.log(err));
  }

  clearFile() {
    console.log('correct way to clear input type=file value');
    this.__file.nativeElement.value = '';
  }

}
