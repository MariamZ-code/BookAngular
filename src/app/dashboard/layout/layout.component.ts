import { TranslateService } from '@ngx-translate/core';
import { Component } from '@angular/core';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent {
  language: any;
  constructor(private translate: TranslateService) {
    this.language = this.translate.currentLang;
  }
  changeLanguage() {
    if (this.language == 'en') {
      localStorage.setItem('language', 'ar');
      console.log(this.language);
    } else {
      localStorage.setItem('language', 'en');
    }
    window.location.reload();
  }
}
