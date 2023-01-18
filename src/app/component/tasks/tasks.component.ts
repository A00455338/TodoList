import { Component, Input, Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TodoListDataService } from 'src/app/service/todo-list-data.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {

  
  showDesc:boolean=false;
  @Input() task =new Task;
  @Output() calltheChange = new EventEmitter<Task>();
  @Output() deleteChange = new EventEmitter<Task>();
  @Output() completeChange = new EventEmitter<Task>();
  @Output() showDescSelected = new EventEmitter<Task>();
  
  callChanges(task: Task) {
    this.calltheChange.emit(task);
  }

  deleteChanges(task: Task) {
    this.deleteChange.emit(task);
  }

  completeChanges(task: Task) {
    this.completeChange.emit(task);
  }

    
  showDescription(task:Task)
  {
    this.showDescSelected.emit(task);
  }


}
