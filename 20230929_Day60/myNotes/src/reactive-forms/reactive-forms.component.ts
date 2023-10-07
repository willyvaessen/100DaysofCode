import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";
@Component({
  selector: 'app-reactive-forms',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <p>
      reactive-forms works!
    </p>
  `,
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent {

}
