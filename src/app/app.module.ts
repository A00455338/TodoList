import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { TasksComponent } from './component/tasks/tasks.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { AddTaskInfoComponent } from './component/add-task-info/add-task-info.component';
import { ReadComponent } from './read/read.component';

import { NgxsModule } from '@ngxs/store';
import { TaskState } from './state/task.state';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    TasksComponent,
    AddTaskInfoComponent,
    ReadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    BrowserAnimationsModule,
    NgxsModule.forRoot([
      TaskState
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
