import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class LanguageSwitcherService {
    constructor(private translate: TranslateService) {
        translate.setDefaultLang('pt');
      }
    
      switchLanguage(language: string) {
        this.translate.use(language)
    }
}