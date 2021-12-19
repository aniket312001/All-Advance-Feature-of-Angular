import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';




const mybook:Book[] = [
  {'id':1,'name':"harry-poter","category":"xyz"},
  {'id':2,'name':"hhh","category":"kaiu"},
  {'id':3,'name':"jumanji","category":"xyz"},
  {'id':4,'name':"you","category":"sam"},
  {'id':5,'name':"one piece","category":"odha"},
]

let booksObservable = of(mybook)  // creating observable

@Injectable({
  providedIn: 'root'
})
export class BookserviceService {

  constructor() { }

  getbook() : Observable<Book[]>{
    return booksObservable
  }

}
