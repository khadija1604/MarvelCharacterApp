import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersComponent } from './characters.component';
import { CharacterApiService } from '../../shared/services/character-api.service';
import { of } from 'rxjs';
import { Character } from 'src/app/shared/models/character';

describe('CharactersComponent', () => {
  let component: CharactersComponent;
  let fixture: ComponentFixture<CharactersComponent>;
  let characterApiService: CharacterApiService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharactersComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        {
          provide: CharacterApiService,
        },
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
          new Character('Shiba Inu', {
            thumbnailPath:
              'https://material.angular.io/assets/img/examples/shiba2',
            thumbnailExtention: 'jpg',
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
});
