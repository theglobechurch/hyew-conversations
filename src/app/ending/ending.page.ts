import { Component, OnInit } from '@angular/core';
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
    this.data.changeQuestion(0);

    // And restart
    this.router.navigate(['/home']);
  }

}
