import { Injectable }    from '@angular/core';
import { Headers, Http } from  '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Note } from './note.model';

@Injectable()
export class NoteService {
  private noteUrl = 'api/notes';
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) {}

  getNotes(): Promise<Note[]> {
    return this.http.get(this.noteUrl)
      .toPromise()
      .then(response => response.json().data as Note[])
      .catch(this.handleError);
  }

  addNote(title: string, tags: string[], text: string): Promise<Note> {
    return this.http
      .post(this.noteUrl, JSON.stringify({title: title, tags: tags, text: text}), {headers: this.headers})
      .toPromise()
      .then(response => response.json().data as Note)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
