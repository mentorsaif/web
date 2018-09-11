import { Component, EventEmitter } from '@angular/core';
import { Article } from './article/article.model';
import { Product } from './product/product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  articles: Article[];
  products: Product[];

  constructor() {

    this.articles = [
      new Article('My favourite article','http://myfav.io',3),
      new Article('My bad article','http://mybad.io',2),
      new Article('My good article','http://mygood.io',1)
    ];

    this.products = [
      new Product(
        'Good book',
        'Good history book',
        '/assets/images/products/goodbook.png',
        ['history','ancient', 'Rome'],
        137
      ),
      new Product(
        'Bad book',
        'Bad crime book',
        '/assets/images/products/badbook.png',
        ['crime','war', 'europe'],
        731
      ),
      new Product(
        'Fun book',
        'Fun kid book',
        '/assets/images/products/funbook.png',
        ['Fun','kids', 'pre-school'],
        13
      )
  
    ];

  }

  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean{
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }

  sortedArticles() : Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  productWasSelected(product: Product): void{
    console.log('Product clicked: ', product);
  }
}