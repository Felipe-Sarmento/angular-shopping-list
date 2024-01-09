import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.scss'
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    {name: "Delicious Chicken", "description": "test", "imagePath": "https://www.realsimple.com/thmb/XyiUAjwQKunt8fMlpz7wU0cFyrU=/750x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/roasted-recipes-tout-a90f5fb9625646d8bf84be90ee3961ca.png"},
  ]

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
