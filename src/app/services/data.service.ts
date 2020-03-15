import { Injectable } from '@angular/core';
import { Book } from '../model/book';
import { Observable } from 'rxjs';
import { map } from 'rxjs/Operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DataService { 
  bookUrl : string = "http://gen.lib.rus.ec/json.php?ids=1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25&fields=id,Title,Author,publisher,language";
  books: Book[];
 constructor(private http: HttpClient) { }

 getBooks():Observable<Book[]>{
  return this.http.get<Book[]>(this.bookUrl);          
 }

}
