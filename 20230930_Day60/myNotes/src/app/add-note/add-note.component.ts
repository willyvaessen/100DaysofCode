import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>
      add-note works!
    </p>
  `,
  styleUrls: ['./add-note.component.css']
})
export class AddNoteComponent {

}
