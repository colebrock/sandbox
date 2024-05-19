import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService } from '../routing-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(
    public router: Router,
    public routingService: RoutingService
  ){

  }

  ngOnInit(){

  }

  routeToAbout(){
    this.routingService.routeToAbout();
  }

  routeToHome(){
    this.routingService.routeToHome();
  }
}
