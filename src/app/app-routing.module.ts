import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { TasksComponent } from './component/tasks/tasks.component';

const routes: Routes = [
  {path:'homepage',component:HomePageComponent},
  {path:'CompletedTasks',component:TasksComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
