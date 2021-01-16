import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character';
import { CharacterApiService } from '../../shared/services/character-api.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[];

  constructor(private characterApiService: CharacterApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterApiService.getAllCharacters().subscribe(
      (characters) => {
        this.characters = characters;
      },
      (error) => {
        throw new Error('Something went wrong');
      },
      () => {
        console.log('completed');
      }
    );
  }
}
