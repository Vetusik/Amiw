import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ICHARACTERS } from '../interfaces/characters';
import { UrlPipe } from './url.pipe';

@Component({
  selector: 'app-star-wars-content',
  templateUrl: './star-wars-content.component.html',
  styleUrls: ['./star-wars-content.component.scss'],
  providers: [UrlPipe]
})
export class StarWarsContentComponent implements OnInit {

  public StarWars: ICHARACTERS;
  public url = "https://swapi.co/api/people/?search=";
  public userInputPiped;
  public errorMessage: string;
  public apiResult = [];
  public th = ["Name:", "Height:", "Mass:", "Hair:", "Skin color:", "Eye color:", "Birth year:", "Gender:"];
  public apiLoaded = false;

  constructor(public _StarWars: StarWarsService, private urlPipe: UrlPipe) { }

  _userInput: string;
  get userInput(): string {
    return this._userInput;
  }
  set userInput(value: string) {
    this._userInput = value;
  }

  ngOnInit() {
  }

  inputChange(event) {


    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsCharacter(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

    this.apiResult = this.StarWars.results;
    this.apiLoaded = true;
  }



  /*   test() {
  
      console.log("Jestem w test() na początku, przebieg = " + this.i);
      console.log("Wywołuję: " + this.StarWars.next);
    
      https://swapi.co/api/people/?page=2&search=k
      this.apiResult.push(this.StarWars.results);
      if (this.StarWars.next != 'null') {
        console.log("Jestem w srdoku, przebieg = " + this.i);
        this._StarWars.getStarWarsCharacter(this.StarWars.next).subscribe(
          {
            next: data => { this.StarWars = data },
            error: err => this.errorMessage = err
          });
        this.i++;
        this.test();
      }
  
      console.log("Skończyłem test() wyświetlam co sie przypisało");
      console.log(this.apiResult);
    } */

}
