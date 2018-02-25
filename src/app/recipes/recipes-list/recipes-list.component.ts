import { Component, OnInit } from '@angular/core';
import {RecipeModel} from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: RecipeModel[]  = [
    new RecipeModel('A test recipe',
      'test description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9JrVdOW8tx31tar3O4bkKaKku5fO_O1lrl-KdLlVzoz3kSi9'
    ),
    new RecipeModel('Other recipe',
      'other description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM9JrVdOW8tx31tar3O4bkKaKku5fO_O1lrl-KdLlVzoz3kSi9'
    )

  ];

  constructor() { }

  ngOnInit() {
  }

}
