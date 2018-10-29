import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-my-upload',
  templateUrl: './my-upload.component.html',
  styleUrls: ['./my-upload.component.css']
})
export class MyUploadComponent implements OnInit {
  isAttachFile = true;
  @ViewChild('file')
  __file: any;

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
      formData.append(`file-${i}`, files[i], files[i].name);

    }
    this.http.post('upload', formData).subscribe(e => {
    }, err => console.log(err));
  }

}
