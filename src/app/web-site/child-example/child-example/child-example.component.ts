import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-child-example',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TranslateModule,],
  templateUrl: './child-example.component.html',
  styleUrls: ['./child-example.component.scss']
})
export class ChildExampleComponent {

}
