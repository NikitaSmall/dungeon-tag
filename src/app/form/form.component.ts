import { Component } from '@angular/core';

import { NoteService } from '../notes/shared/note.service';
import { Note } from '../notes/shared/note.model';

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
      title: title.trim(),
      text: text.trim(),
      tags: tags.split(',').map(tag => tag.trim())
    };

    this.noteService.addNote(note);
  }
}
