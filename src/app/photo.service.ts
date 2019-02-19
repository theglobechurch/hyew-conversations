import { Injectable } from '@angular/core';
import PhotoData from '../assets/data/photos.json';
import QuestionData from '../assets/data/questions.json';
import { Photo, Question } from './descriptions';

@Injectable({
  providedIn: 'root'
})

export class PhotoService {
  constructor() { }

  getPhotos(): Photo[] {
    return PhotoData;
  }
}

export class QuestionService {
  constructor() {}

  getQuestions(): Question[] {
    return QuestionData
  }
}
