import { Router, ActivatedRoute } from '@angular/router';
import { ImagesService } from './../services/images/images.service';
import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators'
import { Location } from '@angular/common';

@Component({
  selector: 'image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent implements OnInit {

  images: app.image[];
  image: app.image;
  loaded: boolean = false;
  orderKey: string = 'catagory'

  constructor(private $images: ImagesService, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      if (params.id) {
        this.$images.single(params.id)
          .subscribe(val => this.image = val)
      }
    });
  }

  back():void{
    this.location.back();
  }
}
