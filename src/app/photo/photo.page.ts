import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, PhotoService, QuestionService } from '../data.service';
import { Photo, Topic, Question } from '../descriptions';
import n2w from 'number-to-words';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.page.html',
  styleUrls: ['./photo.page.scss'],
})
export class PhotoPage implements OnInit {
  photos: Photo[];
  questions: Question[];
  photo: Photo;
  photoId: number = 0;
  topics: Topic[];
  question: Question;
  questionId: number = 0;
  n2wConverter = n2w;

  constructor(
    private photoService: PhotoService,
    private questionService: QuestionService,
    private router: Router,
    public data:DataService
  ) { }

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
    this.topics = this.questionService.getQuestions();
    this.questions = this.topics[this.data.routeId].questions;
    for(let i:number = 0; i < this.questions.length; i++) {
      this.data.userAnswers.push([]);
    }
  }

  btnAdd() {
    const maxPhotos = this.questions[this.questionId].numberOfPhotos;
    this.data.updateResponses(this.question, this.questionId, this.photoId);
    
    if (this.data.userAnswers[this.questionId].length >= maxPhotos) {
      this.router.navigate(['/review']);
    } else {
      this.btnChange("next");
    }
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
