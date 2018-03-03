import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {IngredientModel} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('inputName') inputName: ElementRef;
  @ViewChild('inputAmount') inputAmount: ElementRef;
  @Output() addItemEvent = new EventEmitter<IngredientModel>();
  constructor() { }

  ngOnInit() {
  }

  onAddItem() {
    const name = this.inputName.nativeElement.value;
    const amount = this.inputAmount.nativeElement.value;
    console.log('ShoppingEditComponent.onAddItem() name="' +
      name +
      '" amount="' +
      amount +
      '"');
    this.addItemEvent.emit(new IngredientModel(name, amount))
  }
}
