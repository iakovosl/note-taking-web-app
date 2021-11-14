import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-notes-details',
  templateUrl: './my-notes-details.component.html',
  styleUrls: ['./my-notes-details.component.css']
})
export class MyNotesDetailsComponent implements OnInit {
  @Input()
  selectedNoteTitle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
