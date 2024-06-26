import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Book } from '../Models/Task';
import { ActivatedRoute } from '@angular/router';
import { TasksService } from 'src/app/service/tasks.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css'],
})
export class TaskDetailsComponent implements OnInit {
  task: any;
  constructor(private route: ActivatedRoute, private service: TasksService) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      const taskId = params['id'];
      this.service.getBookById(taskId).subscribe((res: any) => {
        debugger;
        this.task = res;
      });
    });
  }
}
