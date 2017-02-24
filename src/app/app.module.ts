import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent }    from './search/search.component';
import { NotesComponent }     from './notes/notes.component';
import { FormComponent }      from './form/form.component';

import { NoteService } from './notes/shared/note.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    NotesComponent,
    FormComponent
  ],
  providers: [
    NoteService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
