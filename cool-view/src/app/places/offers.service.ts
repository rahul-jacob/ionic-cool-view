import { Injectable } from '@angular/core';
import { Offer } from './offers/offer.model';
import { Place } from './place.model';
import { PlacesService } from './places.service';

@Injectable({
  providedIn: 'root'
})
export class OffersService {

  /*public offerList: Offer[] = [
    new Offer('o1','Pick and Drop Facility','1','p1',true,'https://media.istockphoto.com/vectors/taxi-cab-vector-logo-design-taxi-point-graphic-icon-vector-id827193624'),
    new Offer('o2','Accomadation with Food','1','p1',true,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt5-1SblBahktw2vBdOF5GVJLg_Hp8CNRArQ&usqp=CAU'),
    new Offer('o3','Weekend Special','1','p1',true,'https://image.shutterstock.com/z/stock-vector-the-great-weekend-offer-banner-logo-design-sticker-concept-card-template-icon-poster-unit-1558885097.jpg'),
    new Offer('o4','Sight Seeing Package','1','p1',true,'https://i.pinimg.com/originals/e3/f7/f2/e3f7f2267c5bba1d7eba5a4836594835.jpg'),
    new Offer('o5','Accomadation with 24/7 Transport','1','p1',true,'https://thumbs.dreamstime.com/b/hour-taxi-service-icon-flat-color-design-vector-illustration-141076981.jpg')
  ];*/

  public offerList: Place[];
  public placesService: PlacesService;

  constructor(placesService: PlacesService) {
    this.placesService = placesService;
   }

  getOffers(){
    return this.offerList = this.placesService.getPlaces().filter((e) => 'Y' === e.offerFlag);
  }
  
}
