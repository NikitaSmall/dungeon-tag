import { Component, OnInit } from '@angular/core';

import { Note }        from './shared/note.model';
import { NoteService } from './shared/note.service';

@Component({
  moduleId: module.id,
  templateUrl: './notes.component.html',
  styleUrls: [ './notes.component.css' ],
  selector: 'dungeon-notes'
})
export class NotesComponent implements OnInit {
  notes: Note[] = [];

  constructor(
    private noteService: NoteService
  ) {}

  ngOnInit(): void {
    this.noteService.getNotes()
      .then(notes => this.notes = notes);
  }
}
