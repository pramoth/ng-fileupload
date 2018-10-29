import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyUploadComponent } from './my-upload/my-upload.component';
import {AdMinRouteringModule} from './admin-routing.module';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    AdMinRouteringModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [MyUploadComponent]
})
export class AdminModule { }
