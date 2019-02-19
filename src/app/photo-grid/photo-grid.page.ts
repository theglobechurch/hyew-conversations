import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService } from '../photo.service';
import { DataService } from '../data.service';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.page.html',
  styleUrls: ['./photo-grid.page.scss'],
})
export class PhotoGridPage implements OnInit {
  photos: {};
  photo: number;

  constructor(
    private router: Router,
    private photoService: PhotoService,
    public data:DataService
  ) {
  }

  ngOnInit() {
    this.getPhotos();
    this.data.currentPhoto.subscribe(photo => this.photo = photo);
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  btnPhoto(id: number) {
    this.data.changePhoto(id);
    this.router.navigate(['/photo'])
  }

}
