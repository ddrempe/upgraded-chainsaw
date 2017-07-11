import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  displayIsEnabled = false;
  displayToggleLogs = [''];
  displayToggleLogsWithTimestamp = [''];
  logCounter;

  constructor() {
    this.logCounter = 0;
  }

  enableDisplay() {
    this.displayIsEnabled = (!this.displayIsEnabled);
    this.logCounter++;
    this.displayToggleLogs.push(this.logCounter);
    this.displayToggleLogsWithTimestamp.push(new Date().toLocaleString());
  }

  getBkgColor(log) {
    if (log > 5) {
      return 'blue';
    }
  }
}
