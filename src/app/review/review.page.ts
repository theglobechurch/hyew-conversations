import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService, PhotoService, QuestionService } from '../data.service';
import { Photo } from '../descriptions';

@Component({
  selector: 'app-review',
  templateUrl: './review.page.html',
  styleUrls: ['./review.page.scss'],
})
export class ReviewPage implements OnInit {
  answers: any[] = this.data.userAnswers;
  question;
  questions;
  questionId: number = 0;
  photos: Photo[];

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

  btnNextQuestion() {
    this.data.changeQuestion(this.questionId + 1);
    this.router.navigate(['/photo']);
  }

}
