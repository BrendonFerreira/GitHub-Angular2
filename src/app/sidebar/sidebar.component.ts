import {Component, OnInit, Output, Input, Inject, NgModule} from '@angular/core';
import {NextObserver} from "rxjs/Observer";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() active: boolean;

  constructor( ) {}

  ngOnInit() {
  }
}