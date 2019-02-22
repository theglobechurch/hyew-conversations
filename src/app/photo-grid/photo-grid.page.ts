import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, PhotoService, QuestionService } from '../data.service';
import { Photo, Question, Topic } from '../descriptions';
import n2w from 'number-to-words';

@Component({
  selector: 'app-photo-grid',
  templateUrl: './photo-grid.page.html',
  styleUrls: ['./photo-grid.page.scss'],
})
export class PhotoGridPage implements OnInit {
  photos: Photo[];
  questions: Question[];
  question: Question;
  topics: Topic[];
  photo: number;
  n2wConverter = n2w;

  constructor(
    private photoService: PhotoService,
    private questionService: QuestionService,
    private router: Router,
    public data:DataService
  ) {
  }

  ngOnInit() {
    this.getPhotos();
    this.getQuestions();

    this.data.currentPhoto.subscribe(photo => this.photo = photo);
    this.data.currentQuestion.subscribe(questionId => {
      this.question = this.questions[questionId];
    })
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  getQuestions(): void {
    this.topics = this.questionService.getQuestions();
    this.questions = this.topics[this.data.routeId].questions;
  }

  btnPhoto(id: number) {
    this.data.changePhoto(id);
    this.router.navigate(['/photo'])
  }

}
