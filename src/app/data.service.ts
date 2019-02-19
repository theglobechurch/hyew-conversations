import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import PhotoData from '../assets/data/photos.json';
import QuestionData from '../assets/data/questions.json';
import { Photo, Question } from './descriptions';

@Injectable()
export class DataService {
  private photoSource = new BehaviorSubject(0);
  private questionSource = new BehaviorSubject(0);

  public userAnswers = [];

  currentPhoto = this.photoSource.asObservable();
  currentQuestion = this.questionSource.asObservable();

  constructor() { }

  changePhoto(photoId: number) {
    this.photoSource.next(photoId)
  }

  changeQuestion(questionId: number) {
    this.questionSource.next(questionId)
  }

  updateResponses(question, questionId: number, photoId: number) {
    const maxPhotos = question.numberOfPhotos;

    // Check that the array is expecting the question id (if not create it)
    // this.userAnswers[questionId] = this.userAnswers[questionId] || [];

    // Is photo already selected?
    const i:number = this.userAnswers[questionId].indexOf(photoId);
    if (i == -1 && this.userAnswers[questionId].length !== maxPhotos){
      // add to array
      this.userAnswers[questionId].push(photoId);
    } else if (i >= 0) {
      // It's already there: so remove
      this.userAnswers[questionId].splice(i, 1);
    }
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
