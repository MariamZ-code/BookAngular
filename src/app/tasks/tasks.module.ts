import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TasksRoutingModule } from './tasks-routing.module';
import { TasksComponent } from './tasks/tasks.component';
import { CreateTaskComponent } from './create-task/create-task.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { TaskDetailsComponent } from './task-details/task-details.component';

@NgModule({
  declarations: [
    TasksComponent,
    CreateTaskComponent,
    ConfirmationComponent,
    TaskDetailsComponent,
  ],
  imports: [
    CommonModule,
    TasksRoutingModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatButtonModule,
  ],
})
export class TasksModule {}
