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
  paginatedCharacters: Character[];
  pageSize: number = 8;
  pageSizeOptions: number[] = [8, 12];

  constructor(private characterApiService: CharacterApiService) {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characterApiService.getAllCharacters().subscribe(
      (characters) => {
        this.characters = characters;
        this.paginatedCharacters = this.characters.slice(0, this.pageSize);
      },
      (error) => {
        throw new Error('Something went wrong');
      },
      () => {
        console.log('completed');
      }
    );
  }

  paginate(event): void {
    this.paginatedCharacters = event;
  }
}
