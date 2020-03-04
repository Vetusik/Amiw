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
    this._StarWars.getStarWarsSpecies(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

    console.log(this.userInputPiped);
  }
}
