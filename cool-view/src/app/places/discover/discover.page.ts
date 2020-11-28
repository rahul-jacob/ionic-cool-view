import { Component, OnInit } from '@angular/core';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  private placesService: PlacesService;
  public placeList: Place[];

  constructor(placesService: PlacesService) {
    this.placesService = placesService;
   }

  ngOnInit() {
    this.placeList = this.placesService.getPlaces();
  }

}
