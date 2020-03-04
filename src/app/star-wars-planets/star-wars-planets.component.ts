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
    this._StarWars.getStarWarsPlanet(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

    console.log(this.userInputPiped);
  }
}
