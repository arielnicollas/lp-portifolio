import { Component } from '@angular/core';
import { TranslateService, TranslateModule} from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  imports: [TranslateModule],
  standalone: true,
  templateUrl: './language-switcher.component.html',
  styleUrls: ['./language-switcher.component.scss']
})
export class LanguageSwitcherComponent {
  constructor(private translate: TranslateService) {
    translate.setDefaultLang('pt');
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
}