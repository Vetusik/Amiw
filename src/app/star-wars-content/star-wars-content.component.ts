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

  inputChange() {
    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsCharacter(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

    console.log(this.userInputPiped);
  }
}
