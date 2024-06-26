import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { TasksService } from 'src/app/service/tasks.service';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { CreateTaskComponent } from '../create-task/create-task.component';
import { ToastrService } from 'ngx-toastr';
import { MatPaginator } from '@angular/material/paginator';
import { Book } from '../Models/Task';
import { ConfirmationComponent } from '../confirmation/confirmation.component';
import { TaskDetailsComponent } from '../task-details/task-details.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  displayedColumns: any = [
    'position',
    'title',
    'description',
    'author',
    'genre',
    'actions',
  ];
  page: any;
  total: any;
  dataSource: any = [];
  filteration: any = {
    page: 1,
    limit: 5,
  };
  setTimOutID: any;

  status: any = [{ name: 'In-Progress' }, { name: 'Done' }, { name: 'Active' }];

  constructor(
    private service: TasksService,
    private dialog: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private toaster: ToastrService,
    private router: Router
  ) {}
  @ViewChild(MatPaginator) paginator = {} as MatPaginator;
  ngOnInit(): void {
    this.getAllBooks();
  }
  getAllBooks() {
    this.service.getAllBooks().subscribe((res: any) => {
      debugger;
      this.dataSource = this.mappingData(res.requests);
    });
  }

  createTask() {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '750px',
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllBooks();
      }
    });
  }

  mappingData(data: any[]): Book[] {
    let newData = data.map((item: any) => {
      return {
        Id: item.id,
        Title: item.title,
        Description: item.description,
        Author:item.author,
        Genre:item.genre,
        PublishedDate: item.PublishedDate,
      };
    });
    return newData;
  }

  deleteTask(id: any) {
    console.log(id);
    const dialogRef = this.dialog.open(ConfirmationComponent, {
      width: '500px',
    });
    dialogRef.afterClosed().subscribe((result) => {
      debugger;
      if (result) {
        this.service.deleteBook(id).subscribe((res: any) => {
          if (res.message == 'Deleted') {
            this.toaster.success(res.message);
            this.getAllBooks();
          }
        });
      }
    });
  }

  updateTask(element: any) {
    const dialogRef = this.dialog.open(CreateTaskComponent, {
      width: '750px',
      data: element,
      disableClose: true,
    });
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.getAllBooks();
      }
    });
  }

  openDetails(element: any) {
    debugger;
    this.router.navigate(['/BookDetails', element.Id]);
  }
}
