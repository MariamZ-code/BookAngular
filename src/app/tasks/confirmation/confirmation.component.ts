import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css'],
})
export class ConfirmationComponent {
  constructor(
    private dialog: MatDialog,
    private matDialog: MatDialogRef<ConfirmationComponent>
  ) {}
  confirm() {

    //this.dialog.closeAll();
    this.matDialog.close(true);
  }
  close() {
    this.matDialog.close(false);
  }
}
