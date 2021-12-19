import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
  books:Observable<Book[]> | undefined

  constructor(private service : BookserviceService) { }

  ngOnInit(): void {

    this.books = this.service.getbook()
    console.log(this.books)
  }

}
