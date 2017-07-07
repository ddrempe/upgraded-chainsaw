import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  username = '';
  allowClick = false;
  onInputUpdate(event: Event) {
    if (this.username === '') {
      this.allowClick = false;
    }
  }

  onButtonClick() {
    this.username = '';
  }
}
