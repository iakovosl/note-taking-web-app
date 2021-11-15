import { DatePipe } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
export class Quicknotes {
  title!: String;
  details!: String;
  date!: any;
}

@Component({
  selector: 'app-my-notes-list',
  templateUrl: './my-notes-list.component.html',
  styleUrls: ['./my-notes-list.component.css'],
  providers: [DatePipe]
})
export class MyNotesListComponent implements OnInit {
  titleModel: String;
  contentModel: String;
  dateModel: Date;
  quicknotes: Quicknotes[] = [];

  @Output() noteSelected = new EventEmitter();


  mockData: any = [
    {
      id: '1',
      CREATE_TS: "2021-11-15 17:17",
      title: 'Make a coffee and coding..!!!!',
      done: false,
      details: 'Good Morning! Make a coffee to start your day!!',
      date: new Date()
    }, {
      id: '2',
      CREATE_TS: "2021-11-15 17:57",
      title: 'Netflix!',
      done: false,
      details: 'Its Netflix time! :)',
      date: new Date()
    }, {
      id: '3',
      CREATE_TS: "2021-11-15 18:17",
      title: 'Coding again..!!',
      done: false,
      details: 'Coding again..!!',
      date: new Date()
    }
  ];

  get sortData() {
    return this.mockData.sort((b: any, a: any) => {
      return <any>new Date(b.date) - <any>new Date(a.date);
    });
  }

  setTaskComplete(id: any) {
    this.mockData.map((item: any) => {
      if (item.id === id) {
        item['done'] = true;
      }
    });
  }

  show: boolean = false;
  value!: string;
  id: any;
  CREATE_TS!: string;


  remove(id: any) {
    this.mockData = this.mockData.filter((item: any) => {
      if (item.id !== id) {
        return item;
      }
    });
  }

  create(item: any) {
    this.mockData.push({
      id: Date.now(),
      title: item,
      done: false,
      date: new Date()
    });
  }

  update(title: any) {
    this.mockData.map((item: any) => {
      if (item.id === this.id) {
        item['title'] = title;
      }
    });

    this.show = false;
  }

  edit(id: any, title: any) {
    this.show = true;
    this.value = title;
    this.id = id;
  }


  constructor() {
    this.titleModel = '';
    this.contentModel = '';
    this.dateModel = new Date();


  }

  ngOnInit(): void {
  }
  createQuicknotes() {

    const mockData: Quicknotes = {
      title: this.titleModel,
      details: this.contentModel,
      date: this.dateModel

    };

    this.mockData.push(mockData);

    // set the model values to '' again
    this.titleModel = this.contentModel = '';
    //this.dateModel= new Date();
  }


}
