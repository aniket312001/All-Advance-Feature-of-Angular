import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Book } from '../book';
import { BookserviceService } from '../bookservice.service';

@Component({
  selector: 'app-bookdetail',
  templateUrl: './bookdetail.component.html',
  styleUrls: ['./bookdetail.component.css']
})
export class BookdetailComponent implements OnInit {
  books:Observable<Book[]> | undefined

  constructor(private service : BookserviceService,private router:Router) { }

  ngOnInit(): void {
    console.log("ok")
    this.books = this.service.getbook()
  }

  close(){
    this.router.navigate([{outlets:{bookList:null}}])
  }
}
