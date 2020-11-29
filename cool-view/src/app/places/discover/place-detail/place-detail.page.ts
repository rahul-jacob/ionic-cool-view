import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  public navController: NavController;
  public router: Router;

  constructor(router: Router,navController: NavController) { 
    this.router = router;
    this.navController = navController;
  }

  ngOnInit() {
  }

  navigate(){
    console.log('in navigate method');
    //this.router.navigateByUrl('/places/tabs/discover');
    this.navController.navigateBack('/places/tabs/discover');
    //this.navController.pop;
  }

}
