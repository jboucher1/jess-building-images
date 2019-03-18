import { Router } from '@angular/router';
import { ImagesService } from './../services/images/images.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.scss']
})
export class ImagesComponent implements OnInit {

  images: app.image[];
  loaded: boolean = false;
  orderKey: string = 'catagory'

  constructor(private $images: ImagesService, private router: Router) { }

  ngOnInit() {
    this.fetchImages()
  }

  fetchImages():void{
    this.$images.fetch().subscribe((data:app.image[]) => {
      this.images = data;
      this.loaded = true;
    })

  }

  navigate(image){
    this.router.navigate([`image/${image.id}`])
  }

  setImage(url){
    return {
      backgroundImage:`url(${url})`
    }
  }

}
