import { Component, Input } from '@angular/core';

@Component({
  selector: 'hello',
  template: `
    <mat-card class="card-margin">
      <ng-content select="mat-card-title"></ng-content>
      <mat-card-subtitle>Fill the information blow</mat-card-subtitle>
      <mat-card-content>
        mat-card-content test
      </mat-card-content>
      <mat-card-actions align="end">
        <button mat-raised-button color="primary">Primary</button>
      </mat-card-actions>
    </mat-card>
  `,
  styles: [`
    .card-margin {
      margin: 5px;
    }`
  ]
})
export class HelloComponent  {
  @Input() name: string;
}
