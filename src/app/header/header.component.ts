import {Component, EventEmitter, Output} from '@angular/core';

@Component(
  {
    selector: 'app-header',
    templateUrl : './header.component.html',
    styleUrls: ['./header.component.css']
  }
)

export class HeaderComponent {
  @Output() menuSelection = new EventEmitter<string>();

  onMenuSelection(selection: string) {
    console.log('HeaderComponent.onMenuSelection(): ' + selection);
    this.menuSelection.emit(selection);

  }
}
