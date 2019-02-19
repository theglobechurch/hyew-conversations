import { Component, OnInit } from '@angular/core';
import { DataService, PhotoService, QuestionService } from '../data.service';
import n2w from 'number-to-words';
import { tick } from '@angular/core/src/render3';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  photos;
  questions;
  photo: [];
  photoId: number = 0;
  question: {};
  questionId: number = 0;
  n2wConverter = n2w;

  constructor(
    private questionService: QuestionService,
    private photoService: PhotoService,
    public data:DataService
  ) {
  }

  ngOnInit() {
    this.getPhotos();
    this.getQuestions();

    this.data.currentPhoto.subscribe(photoId => {
      this.photo = this.photos[photoId];
      this.photoId = photoId;
    });

    this.data.currentQuestion.subscribe(questionId => {
      this.question = this.questions[questionId];
      this.questionId = questionId;
    });

  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  getQuestions(): void {
    this.questions = this.questionService.getQuestions();
  }

  btnAdd() {
    // this.data.changeQuestion(1);
  }

  btnChange(direction:string = "next") {
    const photoCount = this.photos.length - 1;

    if (direction == 'next') {
      if (this.photoId + 1 > photoCount) {
        this.photoId = 0;
      } else {
        this.photoId = this.photoId + 1;
      }
    } else {
      if (this.photoId - 1 < 0) {
        this.photoId = photoCount;
      } else {
        this.photoId = this.photoId - 1;
      }
    }
    this.data.changePhoto(this.photoId);
  }

}
