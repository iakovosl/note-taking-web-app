import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-notes-list',
  templateUrl: './my-notes-list.component.html',
  styleUrls: ['./my-notes-list.component.css']
})
export class MyNotesListComponent implements OnInit {

  mockData: any = [
    {
      id: '1',
      CREATE_TS: "2021-11-15 17:17",
      title: 'Make a coffee!!',
      done: false,
      details: 'detail1',
      date: new Date()
    }, {

      id: '2',
      CREATE_TS: "2021-11-15 17:27",
      title: 'Home Gym',
      done: false,
      details: 'detail2',
      date: new Date()
    }, {

      id: '3',
      CREATE_TS: "2021-11-15 17:37",
      title: 'Coding..!!',
      done: false,
      details: 'detail3',
      date: new Date()
    }, {

      id: '4',
      CREATE_TS: "2021-11-15 17:47",
      title: 'Go for a walk',
      done: false,
      details: 'detail4',
      date: new Date()
    }, {
      id: '5',
      CREATE_TS: "2021-11-15 17:57",
      title: 'Netflix!',
      done: false,
      details: 'detail5',
      date: new Date()
    }, {
      id: '6',
      CREATE_TS: "2021-11-15 18:17",
      title: 'Coding again..!!',
      done: false,
      details: 'detail6',
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

  constructor() { }

  ngOnInit(): void {
  }

}
