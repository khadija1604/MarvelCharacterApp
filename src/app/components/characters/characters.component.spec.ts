import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { CharacterApiService } from '../../shared/services/character-api.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { Character } from 'src/app/shared/models/character';
import { of } from 'rxjs';
import { MockCharacterApiService } from '../../shared/mocks/characterApiServiceMock';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let characterApiService: CharacterApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      imports: [HttpClientTestingModule],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: CharacterApiService,
          useClass: MockCharacterApiService,
        },
        HttpTestingController,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharactersComponent);
    component = fixture.componentInstance;
    characterApiService = TestBed.inject(CharacterApiService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  describe('#getCharacters', () => {
    it('it should get characters data and fill characters array', (done) => {
      //when
      //when
      const spy = spyOn(
        characterApiService,
        'getAllCharacters'
      ).and.returnValue(
        of([
          new Character('Fake Name', {
            thumbnailPath: 'FakePath',
            thumbnailExtention: 'FakeExtention',
          }),
        ])
      );
      component.getCharacters();
      //then
      expect(spy).toHaveBeenCalled();
      expect(component.characters).toBeDefined();
      expect(component.characters.length).toBe(1);
      done();
    });
  });

  describe('#paginate', () => {
    const dummyData = [
      new Character('Fake Name', {
        thumbnailPath: 'FakePath',
        thumbnailExtention: 'FakeExtention',
      }),
    ];
    it('Should fill paginatedCharacters array by data to diplay in the current page ', () => {
      component.paginate(dummyData);
      expect(component.paginatedCharacters.length).toEqual(1);
      expect(component.paginatedCharacters).toEqual(dummyData);
    });
  });
});
