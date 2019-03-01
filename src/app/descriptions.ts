export class Photo {
  id: number;
  filename: string;
  alt: string;
}

export class Question {
  copy: string;
  discussion: string;
  numberOfPhotos: number;
}

export class FollowUp {
  intro: string[];
  passage: Passage;
}

export class Passage {
  text: string;
  ref: string;
}

export class Topic {
  name: string;
  icon: string;
  questions: Question[];
  followup: FollowUp;
}
