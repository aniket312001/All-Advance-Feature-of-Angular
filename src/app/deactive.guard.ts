import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { PersonComponent } from './person/person.component';

@Injectable({
  providedIn: 'root'
})
export class DeactiveGuard implements CanDeactivate<PersonComponent> {
  canDeactivate(component: PersonComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return confirm("You sure want to leave this page");
  }
  
  
}
