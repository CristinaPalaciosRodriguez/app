import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-cv-modal',
  templateUrl: './cv-modal.component.html',
  styleUrls: ['./cv-modal.component.scss']
})
export class CvModalComponent {

  constructor( public dialogRef: MatDialogRef<CvModalComponent>,@Inject(MAT_DIALOG_DATA) public data: { content: string }) { }

  onClose(): void {
    this.dialogRef.close();
  }

}
