import { Component } from '@angular/core';

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html'
})
export class ServerComponent {
  serverId: number = 10;  // typescript allows to explicitly define type
  serverStatus = 'offline';

  getServerStatus() {
    return this.serverStatus;
  }
}
