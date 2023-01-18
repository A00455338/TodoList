import { Component } from '@angular/core';
import { Task } from 'src/app/model/task';
import { TodoListDataService } from 'src/app/service/todo-list-data.service';
import { Select, Store } from '@ngxs/store';
import { addTask, GetTask } from 'src/app/actions/task-actions';
import { Observable } from 'rxjs';
import { TaskState } from 'src/app/state/task.state';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {

  DescValue:string='';
  showtaskInfo :Task=new Task();
  emptyTextValue: string = '';
  taskObj: Task = new Task();
  @Select(TaskState.getTasks)
  taskArr$!: any;
  taskValue: string = '';
  editdateValue:Date=new Date();
  editDescValue:string='';
  editTaskValue: string = '';
  confirmDelete: boolean = false;
  dateValue : Date = new Date(0); 

  constructor(private service: TodoListDataService, private store:Store) { }

  ngOnInit(): void {
    this.getAllTasks();

  }

  getAllTasks() {
    this.service.getTask().subscribe((data) => {
      this.store.dispatch(new GetTask(data));
      //this.taskArr = data;
      this.taskValue = '';
      this.taskObj = new Task();
    })
  }

  addTask() {
    if (this.taskValue != '') {
      this.emptyTextValue = ''
      this.taskObj.task_name = this.taskValue;
      this.taskObj.dueDate=this.dateValue;
      this.taskObj.description=this.DescValue;
      this.service.addTask(this.taskObj).subscribe(res => {
        this.store.dispatch(new addTask(res));
        this.taskValue = '';
        this.DescValue='';
        this.dateValue=new Date();
      }, err => {
        console.log(err);
      })
    }
    else {
      this.emptyTextValue = 'Please Enter the task name';
    }
  }

  editTask() {
    this.taskObj.task_name = this.editTaskValue;
    this.taskObj.dueDate=this.editdateValue;
    this.taskObj.description=this.editDescValue;
    this.service.editTask(this.taskObj).subscribe(res => {
      this.getAllTasks();
    }, err => {
      console.log(err);
    })
  }

  deleteTask(eTask: Task) {
    this.confirmDelete = confirm("Are you sure want to delete the task");
    this.confirmDelete ?
      this.service.deleteTask(eTask).subscribe(res => {
        this.getAllTasks();
      }, err => {
        console.log(err);
      }) : '';
  }

  call(eTask: Task) {
    this.taskObj = eTask;
    this.editTaskValue = this.taskObj.task_name;
  }

  completeTask(eTask: Task) {
    this.taskObj = eTask;
    this.taskObj.done = true;
    this.service.editTask(this.taskObj).subscribe(res => {
      this.getAllTasks();
    }, err => {
      console.log(err);
    })
  }

  ShowInfo(task:Task)
  {
    this.showtaskInfo=task;
  }

  toggleShoeDesc()
  {
    this.showtaskInfo=new Task();
  }


}
