import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-nawigacja',
  templateUrl: './nawigacja.component.html',
  styleUrls: ['./nawigacja.component.scss', '../app.component.scss']
})
export class NawigacjaComponent implements OnInit {

  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pl');
  }

  ngOnInit(): void {
  }

  useLanguage(language: string) {
    this.translate.use(language);
  }
}


