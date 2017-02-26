import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule }    from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent }  from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { SearchComponent }    from './search/search.component';
import { NotesComponent }     from './notes/notes.component';
import { FormComponent }      from './form/form.component';

import { NoteService } from './notes/shared/note.service';
import { TagService }  from './shared/tag.service';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService)
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    SearchComponent,
    NotesComponent,
    FormComponent
  ],
  providers: [
    NoteService,
    TagService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
