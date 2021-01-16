import { TestBed } from '@angular/core/testing';

import { CharacterApiService } from './character-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character } from '../models/character';
import { HttpClientModule } from '@angular/common/http';

describe('CharacterApiService', () => {
  let service: CharacterApiService;
  let httpCleintMock: HttpTestingController;
  let dummyCharacter = new Character('', {
    thumbnailPath: '',
    thumbnailExtention: '',
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [{ provide: CharacterApiService }],
    });
    service = TestBed.inject(CharacterApiService);
    httpCleintMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('#getAllCharacters', () => {
    it('Should return an Observable<Character[]>', () => {
      service.getAllCharacters().subscribe((Characters) => {
        expect(Characters.length).toBe(1);
        expect(Characters).toEqual([dummyCharacter]);
      });
      const req = httpCleintMock.expectOne(service.API_URL);
      expect(req.request.method).toBe('GET');
      req.flush(dummyCharacter);
    });
  });

  afterEach(() => {
    httpCleintMock.verify();
  });
});
