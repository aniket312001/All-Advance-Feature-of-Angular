import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';


@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {


  constructor(private cookie:CookieService) { }

  ngOnInit(): void {

    
    localStorage.setItem("localData","localStorage")
    localStorage.setItem("name","sam")
    sessionStorage.setItem("sessionData","SessionStorage")

    console.log(localStorage.getItem("localData"))
    console.log(sessionStorage.getItem("sessionData"))

    localStorage.removeItem("localData") 
    localStorage.clear() 


    let obj = {
      name:"anu",
      age:12,
      marks:99
    }

    localStorage.setItem("obj",JSON.stringify(obj))
    



  }
  //cookie
  set() {
    console.log("hello")
    this.cookie.set("userid","2")
    alert(this.cookie.get("userid"))
   }
  
}


