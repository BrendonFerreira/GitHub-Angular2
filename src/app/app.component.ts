import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  sidebarActive: boolean = false;

  constructor() { }

  ngOnInit() {

  }

  sidebarToggleStateChange(event){
    this.sidebarActive = event;
  }
}
