import { Component, OnInit } from '@angular/core';
import {Router,NavigationExtras} from '@angular/router';
import { DataService } from '../../services/data.service';
import { Book } from '../../model/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.scss']
})
export class IndexPageComponent implements OnInit {   
  searchBook:string;
  books: Observable<Book[]>;   
  favoriteBooks= [];
  constructor(private bookService: DataService, private router:Router) {  }


  ngOnInit() {     
    this.books = this.bookService.getBooks();
  }
  AddFavorite(book:Book)
  {
    this.favoriteBooks.push(book)
  }
  DisplayFavorites()
  {
    sessionStorage.setItem('favorite',this.favoriteBooks.toString());
    this.router.navigate(['/favorite'])
  }
  
}
