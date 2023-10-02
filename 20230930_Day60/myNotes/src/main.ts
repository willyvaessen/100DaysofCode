import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from './app/app.component';
import {Routes} from "@angular/router";
import {NotesListComponent} from "./notes-list/notes-list.component";
import {AddNoteComponent} from "./add-note/add-note.component";

const routes: Routes = [
  { path: '', component: NotesListComponent },
  { path: 'new', component: AddNoteComponent },
];


bootstrapApplication(AppComponent);

platformBrowserDynamic().bootstrapModule(AppComponent)
  .catch(err => console.error(err));
