import { Injectable } from '@angular/core';

import { Note } from './note.model';
import { NOTES } from './note-mock';

@Injectable()
export class NoteService {
  getNotes(): Promise<Note[]> {
    return Promise.resolve(NOTES);
  }
}
