import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/model/book';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {
  books:Book[];
  constructor() { }

  ngOnInit(): void {
    this.books = JSON.parse(sessionStorage.getItem('favorite'));
  }
  RemoveFavorite(book:Book)
  {    
    const itemIndex= this.books.findIndex(i=>i.id==book.id);
    this.books.splice(itemIndex,1);
  }


}
