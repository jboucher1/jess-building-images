import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ImagesService {
  constructor(private  httpClient:  HttpClient) { }

  fetch():  Observable<app.image[]>{
    return <Observable<app.image[]>>this.httpClient.get('../../../assets/work-images.json');
    }

    single(id:any): Observable<app.image>{
      return this.fetch().pipe(map(images => images.filter(image => image.id === parseInt(id))[0]))
    }
}
