import { Component } from '@angular/core';
import { PhotoService } from '../data.service';
import { Photo } from '../descriptions';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  photos: Photo[];
  photo: Photo;

  constructor(
    private photoService: PhotoService
  ){}

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }
}
