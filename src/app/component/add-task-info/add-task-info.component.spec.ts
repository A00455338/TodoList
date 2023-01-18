import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaskInfoComponent } from './add-task-info.component';

describe('AddTaskInfoComponent', () => {
  let component: AddTaskInfoComponent;
  let fixture: ComponentFixture<AddTaskInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTaskInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaskInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
