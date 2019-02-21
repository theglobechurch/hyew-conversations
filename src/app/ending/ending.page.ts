import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';
import { PhotoService, DataService } from '../data.service';
import { Photo } from '../descriptions';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  photos: Photo[];

  constructor(
    private photoService: PhotoService,
    private router: Router,
    public data:DataService
  ) { }

  ngOnInit() {
    this.getPhotos();
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  btnEnd() {
    // Forget everything
    this.data.userAnswers = [];

    // And restart
    this.router.navigate(['/home']);
  }

}
