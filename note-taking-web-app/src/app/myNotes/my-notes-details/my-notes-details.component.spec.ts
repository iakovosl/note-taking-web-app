import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNotesDetailsComponent } from './my-notes-details.component';

describe('MyNotesDetailsComponent', () => {
  let component: MyNotesDetailsComponent;
  let fixture: ComponentFixture<MyNotesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyNotesDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNotesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
