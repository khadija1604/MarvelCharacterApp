import { Observable, of } from 'rxjs';

import { Character } from '../models/character';
export class MockCharacterApiService {
  getAllCharacters(): Observable<Character[]> {
    return of([
      new Character('', {
        thumbnailPath: '',
        thumbnailExtention: '',
      }),
    ]);
  }
}
