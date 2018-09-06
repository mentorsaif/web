import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[];
  test: [1, 2, 3];

  cosntructor() {
    this.articles = [
      new Article('My favourite article','http://myfav.io',3),
      new Article('My bad article','http://mybad.io',2),
      new Article('My good article','http://mygood.io',1)
    ];
  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    return false;
  }
}