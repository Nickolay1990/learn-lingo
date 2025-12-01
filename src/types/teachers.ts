export interface Teacher {
  languages: string[];
  levels: string[];
  price_per_hour: number;
  name: string;
  surname: string;
  avatar_url: string;
  lessons_done: number;
  rating: number;
  lesson_info: string;
  conditions: string[];
  reviews: Review[];
  id: string;
}

export interface Review {
  comment: string;
  reviewer_name: string;
  reviewer_rating: number;
}

export interface BookFormValues {
  reason: string;
  name: string;
  email: string;
  phone: string;
}
