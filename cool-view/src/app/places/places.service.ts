import { Injectable } from '@angular/core';
import {Place} from './place.model';
@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place('p1','Woodbriar Group','A Tea bungalow in Munnar',
    'https://cf.bstatic.com/images/hotel/max1280x900/230/230058805.jpg',
    1999),
    new Place('p2','Nonesuch Retreat','A bungalow on top of the hill in Coonoor',
    'https://media-cdn.tripadvisor.com/media/photo-s/0f/c5/7d/fc/nonesuch-retreat.jpg',
    2699),
    new Place('p3','Holiday Cottages, Bungalows','Coorg Holiday special package available for family',
    'https://www.amastaysandtrails.com/content/dam/ama/Featured/surgi-bungalow.jpg/_jcr_content/renditions/cq5dam.web.756.756.jpeg',
    2400),
    new Place('p4','Briar Tea Bungalows','Holiday bungalows in Valparai',
    'https://www.experiencetravelgroup.com/reposit/20170315045539_1.jpg',
    1800),
    new Place('p5','Ananka Homestay Mysore','India\'s coffee-growing tradition thrives with new gourmet produce',
    'https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fs3-ap-northeast-1.amazonaws.com%2Fpsh-ex-ftnikkei-3937bb4%2Fimages%2F6%2F2%2F2%2F3%2F25723226-3-eng-GB%2FCropped-1584930027halli-berri-coffee-estate-chikmagalur-196-31.jpg?source=nar-cms',
    2500),
    new Place('p6','Hotel Samudra KTDC,','A stay near the beaches of kerala with authentic kerala reciepies',
    'https://image.wedmegood.com/resized/800X/uploads/member/700506/1568440451_Screenshot_from_2019_09_14_10_38_23.png',
    1800)
  ];

  constructor() { }

  getPlaces(){
    return [...this._places];
  }
}
