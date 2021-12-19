import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
 
    // localStorage.setItem("localData","aniket")

    console.log(localStorage.getItem("localData"))
    console.log(localStorage.getItem("name"))
    console.log(sessionStorage.getItem("sessionData"))

    console.log(localStorage.getItem("obj"))
    console.log(window.localStorage)  // it will tell you if it is supported or not 

  }

}
