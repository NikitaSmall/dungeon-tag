import { Component } from '@angular/core';

import { NoteService } from '../notes/shared/note.service';

@Component({
  moduleId: module.id,
  templateUrl: './form.component.html',
  selector: 'dungeon-form'
})
export class FormComponent {
  constructor(private noteService: NoteService) {}

  addNote(title: string, tags: string, text: string): void {
    let tagArray = tags.split(',').map(tag => tag.trim());
    title = title.trim();
    text = text.trim();

    if (!title || !text) { return; }
    this.noteService.addNote(title, tagArray, text)
      .then(note => {
        console.log(note);
      });
  }
}
