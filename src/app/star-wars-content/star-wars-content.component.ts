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

public dupa = "elo";

  inputChange(event) {

    if (event.key === "Enter") {
    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsCharacter(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

    console.log(this.dupa);
    console.log(this.StarWars);
    console.log(this.StarWars.results);
    }
  }

  save(){
      sessionStorage.setItem('operation', JSON.stringify(this.dupa));
      sessionStorage.setItem('name', JSON.stringify(this.StarWars.results[0]));
  }


}
