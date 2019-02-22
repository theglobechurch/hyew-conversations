import { Component } from '@angular/core';
import { DataService, PhotoService, QuestionService } from '../data.service';
import { Photo, Topic } from '../descriptions';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage {
  photos: Photo[];
  topics: Topic[];

  constructor(
    private photoService: PhotoService,
    private questionService: QuestionService,
    private router: Router,
    public data:DataService
  ){}

  ngOnInit() {
    this.getPhotos();
    this.getTopics();
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  getTopics(): void {
    this.topics = this.questionService.getQuestions();
  }

  btnRoute(i:number) {
    this.data.changeRoute(i);
    this.router.navigate(['/photo']);
  }
}
