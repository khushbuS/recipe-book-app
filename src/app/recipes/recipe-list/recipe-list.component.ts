import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Pasta', 'delicious pasta', 'https://www.seriouseats.com/recipes/images/2016/08/20160827-cherry-tomato-pasta-13.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
