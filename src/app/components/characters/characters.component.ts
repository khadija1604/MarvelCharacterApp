import { Component, OnInit } from '@angular/core';
import { Character } from '../../shared/models/character';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {
  characters: Character[];

  constructor() {}

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.characters = [
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
    ];
  }
}
