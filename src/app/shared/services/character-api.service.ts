import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Character } from '../models/character';

@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  getAllCharacters(): Observable<Character[]> {
    return of([
      new Character('Shiba Inu', {
        thumbnailPath: 'https://material.angular.io/assets/img/examples/shiba2',
        thumbnailExtention: 'jpg',
      }),
      new Character('Shiba Inu', {
        thumbnailPath: 'https://material.angular.io/assets/img/examples/shiba2',
        thumbnailExtention: 'jpg',
      }),
      new Character('Shiba Inu', {
        thumbnailPath: 'https://material.angular.io/assets/img/examples/shiba2',
        thumbnailExtention: 'jpg',
      }),
      new Character('Shiba Inu', {
        thumbnailPath: 'https://material.angular.io/assets/img/examples/shiba2',
        thumbnailExtention: 'jpg',
      }),
    ]);
  }

  constructor() {}
}
