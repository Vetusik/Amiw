import { Component, OnInit } from '@angular/core';
import { StarWarsService } from '../star-wars.service';
import { ISW } from '../starwars';
import { IMG } from '../images';
import { UrlPipe } from './url.pipe';


@Component({
  selector: 'app-star-wars-content',
  templateUrl: './star-wars-content.component.html',
  styleUrls: ['./star-wars-content.component.scss'],
  providers: [UrlPipe]
})
export class StarWarsContentComponent implements OnInit {

  public StarWars: ISW;
  public Images: IMG;
  public url = "https://swapi.co/api/people/?search=";
  public urlImg = "https://pixabay.com/api/?key=15473729-269b10df5b88e85bb75246e79&q="//Apple&tbm=isch&ijn=0";
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
  /* 
    Todo = {
      id: 90789,
      text: 'XXXXXX',
      elo: [{ id: 90789, text: 'XXXXXX' },
      { id: 90789, text: 'XXXXXX' },
      { id: 90789, text: 'XXXXXX' }]
    }; */

  ngOnInit() {
    // console.log(this.Todo.elo[0].id); 


  }

  inputChange() {

    this.userInputPiped = this.urlPipe.transform(this.userInput);
    this._StarWars.getStarWarsData(this.url + this.userInputPiped).subscribe(
      {
        next: data => { this.StarWars = data },
        error: err => this.errorMessage = err
      });
    
    this._StarWars.getImagesData(this.urlImg + this.userInputPiped).subscribe(
      {
        next: data => { this.Images = data },
        error: err => this.errorMessage = err
      });

    console.log(this.urlImg);
    console.log(this.userInputPiped);
  }
}
