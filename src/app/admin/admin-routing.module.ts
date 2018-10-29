import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MyUploadComponent} from './my-upload/my-upload.component';

const routes: Routes = [
  {path: '', component: MyUploadComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdMinRouteringModule {

}
