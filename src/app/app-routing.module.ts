import { ContactComponent } from './contact/contact.component';
import { ImageComponent } from './image/image.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImagesComponent } from './images/images.component';

const routes: Routes = [
  { path: '', component: ImagesComponent },
  { path: 'images', component: ImagesComponent },
  { path: 'image/:id', component: ImageComponent },
  { path: 'contact', component: ContactComponent },
  { path: '**', component: ImagesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
