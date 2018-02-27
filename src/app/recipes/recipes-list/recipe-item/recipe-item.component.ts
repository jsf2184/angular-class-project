import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {RecipeModel} from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Output() itemSelection = new EventEmitter<void>();
  @Input() model: RecipeModel;

  constructor() { }

  ngOnInit() {
  }

  onItemSelected() {
    console.log('RecipeItemComponent.onItemSelected(): name="' +
      this.model.name +
      '", desc="' +
      this.model.description +
      '"'
    );
    this.itemSelection.emit();
  }
}
