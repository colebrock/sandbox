import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(
    public router: Router
  ) { }

  public routeToHome(){
    this.router.navigate(['bambam/home'])
  }

  public routeToAbout(){
    this.router.navigate(['bambam/about'])
  }
}
