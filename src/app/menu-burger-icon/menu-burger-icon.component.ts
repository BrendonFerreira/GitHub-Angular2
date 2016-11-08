import {Component, OnInit, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-menu-burger-icon',
  templateUrl: './menu-burger-icon.component.html',
  styleUrls: ['./menu-burger-icon.component.scss']
})
export class MenuBurgerIconComponent implements OnInit {

  active : boolean;

  @Output() onToggleStageChange = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleButtonState(e: Event) : void {
    this.active = !this.active;
    this.onToggleStageChange.emit(this.active);
  }

}
