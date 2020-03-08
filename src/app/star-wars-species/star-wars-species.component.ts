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
  public apiResult = [];
  public th = ["Name:", "Classification:", "Designation:", "Average height:", "Skin colors:", "Hair colors:", "Average lifespan:", "Languages:"];
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
    this._StarWars.getStarWarsSpecies(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });

      this.apiResult = this.StarWars.results;
      this.apiLoaded = true;
  }
}
