import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PhotoService, DataService, QuestionService } from '../data.service';
import { FollowUp, Photo } from '../descriptions';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  photos: Photo[];
  followup: FollowUp;

  constructor(
    private photoService: PhotoService,
    private questionService: QuestionService,
    private router: Router,
    public data:DataService
  ) { }

  ngOnInit() {
    this.getPhotos();
    this.getFollowUp();
  }

  getPhotos(): void {
    this.photos = this.photoService.getPhotos();
  }

  getFollowUp(): void {
    const topics = this.questionService.getQuestions();
    this.followup = topics[this.data.routeId].followup;
  }

  btnEnd() {
    // Forget everything
    this.data.userAnswers = [];
    this.data.changeQuestion(0);

    // And restart
    this.router.navigate(['/home']);
  }

}
