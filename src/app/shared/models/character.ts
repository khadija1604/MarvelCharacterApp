export class Character {
  name: string;
  characterImage: CharacterImage;

  constructor(name: string, characterImage: CharacterImage) {
    this.name = name;
    this.characterImage = characterImage;
  }
}

class CharacterImage {
  thumbnailPath: string;
  thumbnailExtention: string;

  constructor(thumbnailPath: string, thumbnailExtention: string) {
    this.thumbnailPath = thumbnailPath;
    this.thumbnailExtention = thumbnailExtention;
  }
}
