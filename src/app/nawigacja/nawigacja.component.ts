import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss', '../app.component.scss']
})
export class NawigacjaComponent implements OnInit {

  public lang;

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  ngOnInit(): void {
    this.getLang();
  }

  useLanguage(language: string) {
    this.lang=language;
    this.translate.use(this.lang);
    if (this.lang == 'en') {
      localStorage.setItem('lang', JSON.stringify(this.lang));
    }
    else
      localStorage.setItem('lang', JSON.stringify(this.lang));
  }
  getLang() {
    if (localStorage.getItem('lang') === null){
    }
    else {
      this.lang = JSON.parse(localStorage.getItem('lang'));
      this.translate.use(this.lang);
    }
  }
}




