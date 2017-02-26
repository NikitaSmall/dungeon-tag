import { Component } from '@angular/core';
import { NoteService } from './shared/note.service';

@Component({
  moduleId: module.id,
  templateUrl: './notes.component.html',
  styleUrls: [ './notes.component.css' ],
  selector: 'dungeon-notes'
})
export class NotesComponent {
  constructor(private noteService: NoteService) {}
}
