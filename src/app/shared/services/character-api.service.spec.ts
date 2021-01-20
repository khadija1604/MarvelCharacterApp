import { TestBed } from '@angular/core/testing';
import { CharacterApiService } from './character-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character } from '../models/character';

describe('CharacterApiService', () => {
  let service: CharacterApiService;
  let httpClientMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CharacterApiService],
    });
    service = TestBed.inject(CharacterApiService);
    httpClientMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#getAllCharacters', () => {
    const dummyCharacter = new Character('FakeName', {
      thumbnailPath: 'fakePath',
      thumbnailExtention: 'FakeExtention',
    });

    it('Should return an Observable<Character[]>', () => {
      service.getAllCharacters().subscribe((Characters) => {
        expect(Characters?.length).toBe(1);
        expect(Characters).toEqual([dummyCharacter]);
      });
      const req = httpClientMock.expectOne(service.API_URL);
      expect(req.request.method).toBe('GET');
      const fakeResponse = {
        data: {
          results: [
            {
              name: 'FakeName',
              thumbnail: {
                path: 'fakePath',
                extension: 'FakeExtention',
              },
            },
          ],
        },
      };
      req.flush(fakeResponse);
    });
  });

  afterEach(() => {
    httpClientMock.verify();
  });
});
