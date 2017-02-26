import { Injectable }    from '@angular/core';
import { Headers, Http } from  '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/Rx';

import { Note } from './note.model';
import { asObservable } from './as-observable';

@Injectable()
export class NoteService {
  private noteUrl = 'api/notes';
  private headers = new Headers({'Content-Type': 'application/json'});

  private _notes: BehaviorSubject<Note[]> = new BehaviorSubject([]);

  constructor(private http: Http) {
    this.loadInitialData();
  }

  getNotes(): Observable<Note> {
    return asObservable(this._notes);
  }

  loadInitialData(): void {
    this.http.get(this.noteUrl).subscribe(
      response => {
        this._notes.next(response.json().data as Note[]);
      },
      this.handleError
    );
  }

  addNote(note: Note): void {
    this.http.post(this.noteUrl, JSON.stringify(note), {headers: this.headers})
      .subscribe(response => {
        let notes = this._notes.getValue();
        notes.push(response.json().data as Note);

        this._notes.next(notes);
      });
  }

  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
}
