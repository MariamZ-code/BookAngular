import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'TODO';
  language: any;
  constructor(private translate: TranslateService) {
    if ('language' in localStorage) {
      this.language = localStorage.getItem('language');
      console.log(this.language);
      this.translate.use(this.language);
    } else {
      this.translate.use(this.translate.defaultLang);
    }
  }
}
