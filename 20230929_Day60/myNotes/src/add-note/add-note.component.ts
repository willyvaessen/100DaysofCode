import {Component, inject} from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {NOTES} from "../notes";
import { Router } from "@angular/router";

@Component({
  selector: 'app-add-note',
  standalone: true,
  imports: [CommonModule,ReactiveFormsModule],
  template: `
<div class="container">
  <h2>New Note</h2>
  <form [formGroup]="addNoteForm">
    <div>
      <label for="note-title">
        Title:
        <input id="note-title" formControlName="title" />
      </label>
    </div>
    <div>
      <label for="note-text">
        Text:
        <input id="note-text" formControlName="text" />
      </label>
    </div>
    <button
      class="button"
      type="submit"
      [disabled]="!addNoteForm.valid"
      (click)="addNote()"
    >
      Add Note
    </button>
  </form>
</div>
  `,
  styleUrls: ['./add-note.component.css'],
})
export class AddNoteComponent {
  router = inject(Router);

  addNoteForm = new FormGroup({
    title: new FormControl('', Validators.required),
    text: new FormControl(''),
    }
  );

  addNote() {
    let title = this.addNoteForm.value.title ?? '';
    let text = this.addNoteForm.value.text ?? '';

    if (this.addNoteForm.valid) {
      let ids = NOTES.map((a) => a.id);
      let maxId = 0;
      if (ids.length > 0) {
        maxId = Math.max(...ids);
      }
      let newNote = {
        id: maxId +1,
        title: title,
        text: text,
      }
      NOTES.unshift(newNote);
      this.addNoteForm.reset();
      this.router.navigateByUrl('/');
    }
  }
}
