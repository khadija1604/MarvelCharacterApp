import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Character } from 'src/app/shared/models/character';

import { CharacterComponent } from './character.component';

describe('CharacterComponent', () => {
  let component: CharacterComponent;
  let fixture: ComponentFixture<CharacterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CharacterComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharacterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should have a field of type character', () => {
    component.character = new Character('', {
      thumbnailPath: '',
      thumbnailExtention: '',
    });
    expect(component.character).toBeInstanceOf(Character);
  });
});
