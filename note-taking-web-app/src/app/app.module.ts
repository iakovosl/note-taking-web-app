import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyNotesListComponent } from './myNotes/my-notes-list/my-notes-list.component';
import { MyNotesDetailsComponent } from './myNotes/my-notes-details/my-notes-details.component';

@NgModule({
  declarations: [
    AppComponent,
    MyNotesListComponent,
    MyNotesDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
