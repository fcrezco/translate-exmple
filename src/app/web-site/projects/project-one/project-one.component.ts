import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-project-one',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './project-one.component.html',
  styleUrls: ['./project-one.component.scss']
})
export class ProjectOneComponent {

}
