import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RoutingService} from '../routing-service.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent implements OnInit{

  constructor(
    public router: Router,
    public routingService: RoutingService
  ){

  }

  ngOnInit(){

  }

  routeToHome(){
    this.routingService.routeToHome();
  }

  routeToAbout(){
    this.routingService.routeToAbout();
  }

}
