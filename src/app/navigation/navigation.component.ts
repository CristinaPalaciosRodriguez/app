import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LanguageService } from '../language.service';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent {

  selectedLanguage: string = 'es';
  languageTexts: any;
  
  languages = [
    { value: 'en', viewValue: 'English' },
    { value: 'es', viewValue: 'Español' }
    // Agrega más idiomas si es necesario
  ];

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private languageService: LanguageService) {
    this.selectedLanguage = 'es'; // Establece el idioma predeterminado
    this.updateLanguageTexts();
  }

  updateLanguageTexts() {
    this.languageService.updateLanguageTexts(this.selectedLanguage);
    this.languageTexts = this.languageService.languageTextsArray;
  }
}
