import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { IsActiveService } from './is-active.service';

@Injectable({
  providedIn: 'root'
})
export class ActiveGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
     
    if(this.service.show()){
      return true
    }
    else{
      alert("You Cannot access Admin page")
      return false;
    }
  }

  constructor(private service:IsActiveService){

  }
  
}
