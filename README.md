# MarvelCharacterApplication

## Presentation:

The application gets the list of characters from Marvel API and display them in yearBook format,
It implements two features :
-displaying Marvel characters
-Pagination

## Local environnement setup:

-Make sure you have node installed in your machine, Otherwise you can download it from `https://nodejs.org/en/download/current/`
-In my case i have the 12.16.3 version of NodeJs
-This project is developed with angular 11 version and was generated with Angular CLI version 10.0.0
-If you don’t have angular CLI install it, make sure you insall 10V or above
-After cloning or downloading project from the github repository :
-Open it with your suitable editor and make sure you are on the project folder
-Execute « npm install » command
-Edit constantes.ts file (src/app/shared/constantes.ts) and set your own Marvel Comics API timestamp, hash and Apikey:
TIMESTAMP=’’
MARVEL_API_HASH=’’
MARVEL_PUBLIC_API_KEY=’’

If you don’t yet have a Marvel account , You can navigate to the link bellow and create one:

https://www.marvel.com

Check for API documentation details to get how to construct and generate different access :

https://developer.marvel.com/documentation/authorization

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`

## Running unit tests

Run `ng test` to execute the unit tests via [Karma]
