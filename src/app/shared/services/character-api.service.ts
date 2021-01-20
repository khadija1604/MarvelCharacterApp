import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Character } from '../models/character';
import { ApiParams } from '../constantes';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CharacterApiService {
  API_URL = `https:gateway.marvel.com/v1/public/characters?ts=15&apikey=${ApiParams.MARVEL_PUBLIC_API_KEY}&hash=${ApiParams.MARVEL_API_HASH}`;

  constructor(private httpClient: HttpClient) {}

  getAllCharacters(): Observable<Character[]> {
    return this.httpClient.get<Character[]>(this.API_URL).pipe(
      map((response) =>
        response['data']?.results?.map((character) => {
          return new Character(character['name'], {
            thumbnailPath: character['thumbnail'].path,
            thumbnailExtention: character['thumbnail'].extension,
          });
        })
      )
    );
  }
}
