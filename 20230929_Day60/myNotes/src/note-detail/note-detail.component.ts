import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {NOTES} from "../notes";
import {Router, RouterModule} from "@angular/router";

@Component({
  selector: 'app-note-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
<div id="note-container">
  <span class="note-title">note.title</span>
  <span class="note-id">ID: note.id</span>
  <span class="note-text">note.text</span>
</div>
<nav>
  <button routerLink="">Back to List</button>
</nav>

  `,
  styleUrls: ['./note-detail.component.css'],

})
export class NoteDetailComponent {

}
