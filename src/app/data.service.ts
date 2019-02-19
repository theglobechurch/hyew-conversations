import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import PhotoData from '../assets/data/photos.json';
import QuestionData from '../assets/data/questions.json';
import { Photo, Question } from './descriptions';

@Injectable()
export class DataService {
  private photoSource = new BehaviorSubject(0);
  private questionSource = new BehaviorSubject(0);
  currentPhoto = this.photoSource.asObservable();
  currentQuestion = this.questionSource.asObservable();

  constructor() { }

  changePhoto(photo_id: number) {
    this.photoSource.next(photo_id)
  }

  changeQuestion(question_id: number) {
    this.questionSource.next(question_id)
  }
}

@Injectable({ providedIn: 'root' })
export class PhotoService {
  constructor() { }

  getPhotos(): Photo[] {
    return PhotoData;
  }
}

@Injectable({ providedIn: 'root' })
export class QuestionService {
  constructor() {}

  getQuestions(): Question[] {
    return QuestionData
  }
}
