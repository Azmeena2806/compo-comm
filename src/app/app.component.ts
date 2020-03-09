import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  title = 'testing-app';  
  servers = [];
  
  OnAddServer() {  
    this.servers.push('Another Server Added');  
  }  
  
  onRemoveServer(id: number) {  
    const position = id + 1;  
    this.servers.splice(position, 1);  
  }  
}
