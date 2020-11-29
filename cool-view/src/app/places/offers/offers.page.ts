import { Component, OnInit } from '@angular/core';
import { OffersService } from '../offers.service';
import { Place } from '../place.model';


@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  public offerList: Place[];
  public offerService: OffersService;

  constructor(offerService: OffersService) {
    this.offerService = offerService;
  }

  ngOnInit() {
    this.offerList = this.offerService.getOffers();
  }

}
