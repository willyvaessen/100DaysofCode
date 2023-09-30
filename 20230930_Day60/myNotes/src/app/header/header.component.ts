import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

const title = 'My Notes Application';
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>{{title}}
    </h1>
  `,
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  protected readonly title = title;
}
