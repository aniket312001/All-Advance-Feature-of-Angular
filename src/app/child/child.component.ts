import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }
  
  count :number=0
  message : string= ""

  increaseByOne(){
    this.count = this.count + 1
    this.message = "Count is "+this.count
  }

  decreseByOne(){
    this.count = this.count - 1
    this.message = "Count is "+this.count
  }

  ngOnInit(): void {
  }

}
