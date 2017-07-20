import { Component } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  template: `
    <div class="alert alert-success">
      <strong>Success!</strong> Indicates a successful or positive action.
    </div>
  `,
  styles: [
      `
      div {
        font-size: 20px;
      }
    `
  ]
})

export class SuccessAlertComponent{

}
