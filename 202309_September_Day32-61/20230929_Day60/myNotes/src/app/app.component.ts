import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import {NotesListComponent} from "../notes-list/notes-list.component";
import {FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {AddNoteComponent} from "../add-note/add-note.component";
import { RouterModule } from "@angular/router";

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [HeaderComponent, NotesListComponent, ReactiveFormsModule, AddNoteComponent, RouterModule],
})
export class AppComponent {
  name = new FormControl;
  title: "myNotes" | undefined;
  showName() {
  alert(this.name.value);
}
login(){
    alert(
      this.loginForm.value.username +
      ' |  ' +
      this.loginForm.value.password
    );
}

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
}
