import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { FormControl, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ProjectsComponent } from "./web-site/projects/projects.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    imports: [CommonModule, RouterOutlet, TranslateModule, FormsModule, ProjectsComponent]
})
export class AppComponent {
  title = 'translate-exmple';

  form = new FormGroup({
    language: new FormControl('', Validators.required)
  });

  selectedLanguage = 'en';

  constructor(private translate: TranslateService){
    translate.setDefaultLang('en');

    translate.use('en');
  }

  changeLanguage() {
    this.translate.use(this.selectedLanguage);
  }

  get f(){
    return this.form.controls;
  }
}
