import { Component } from '@angular/core';

import { NoteService } from '../shared/note.service';
import { Note } from '../shared/note.model';

@Component({
  moduleId: module.id,
  templateUrl: './form.component.html',
  selector: 'dungeon-form'
})
export class FormComponent {
  constructor(private noteService: NoteService) {}

  addNote(title: string, tags: string, text: string): void {
    if (!title || !text) { return; }
    let note = {
      id: Math.floor(Math.random() * (100 - 0)),
      title: title.trim(),
      text: text.trim(),
      tags: tags.split(',').map(tag => tag.trim())
    };

    this.noteService.addNote(note);
  }
}
