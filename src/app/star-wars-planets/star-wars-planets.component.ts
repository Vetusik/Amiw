import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { IPLANETS } from '../interfaces/planets';
import { UrlPipe } from '../star-wars-content/url.pipe';

@Component({
  selector: 'app-star-wars-planets',
  templateUrl: './star-wars-planets.component.html',
  styleUrls: ['./star-wars-planets.component.scss'],
  providers: [UrlPipe]
})
export class StarWarsPlanetsComponent implements OnInit {

  public StarWars: IPLANETS;
  public url = "https://swapi.co/api/planets/?search=";
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
    sessionStorage.setItem('planets', JSON.stringify(this._userInput));
  }

  ngOnInit() {
    this.getOperation();
  }

  inputChange(event) {
    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsPlanet(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });
      this.apiLoaded = true;
  }

  getOperation() {
    if (sessionStorage.getItem('planets') === null) {
      this._userInput = "";
    }
    else {
      this._userInput = JSON.parse(sessionStorage.getItem('planets'));
    }
  }
} 
