import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ISPECIES } from '../interfaces/species';
import { UrlPipe } from '../star-wars-content/url.pipe';

@Component({
  selector: 'app-star-wars-species',
  templateUrl: './star-wars-species.component.html',
  styleUrls: ['./star-wars-species.component.scss'],
  providers: [UrlPipe]
})
export class StarWarsSpeciesComponent implements OnInit {


  public StarWars: ISPECIES;
  public url = "https://swapi.co/api/species/?search=";
  public userInputPiped;
  public errorMessage: string;
  public apiLoaded = false;

  constructor(public _StarWars: StarWarsService, private urlPipe: UrlPipe) { }

  _userInput: string;
  get userInput(): string {
    return this._userInput;
  }
  set userInput(value: string) {
    this._userInput = value;
    sessionStorage.setItem('species', JSON.stringify(this._userInput));
  }

  ngOnInit() {
    this.getOperation();
  }

  inputChange(event) {
    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsSpecies(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });
    this.apiLoaded = true;
  }

  getOperation() {
    if (sessionStorage.getItem('species') === null) {
      this._userInput = "";
    }
    else {
      this._userInput = JSON.parse(sessionStorage.getItem('species'));
    }
  }
}
