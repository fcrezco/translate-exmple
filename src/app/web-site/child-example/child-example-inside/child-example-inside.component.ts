import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-child-example-inside',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './child-example-inside.component.html',
  styleUrls: ['./child-example-inside.component.scss']
})
export class ChildExampleInsideComponent {

}
