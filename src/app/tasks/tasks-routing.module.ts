import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { TaskDetailsComponent } from './task-details/task-details.component';

const routes: Routes = [
  { path: '', component: TasksComponent },
  { path: 'BookDetails/:id', component: TaskDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksRoutingModule {}
