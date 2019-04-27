import { Component, OnInit, Inject } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

import { flyInOut, expand } from '../animations/app.animation';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
    },
    animations: [
      flyInOut(),
      expand()
    ]
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featureLeader: Leader;

  dishErrMess: string;
  promotionErrMess: string;
  leaderErrMess: string;

  constructor(private dishservice: DishService,
    private promotionService: PromotionService,
    private LeaderService: LeaderService, 
    @Inject('BaseURL') private BaseURL) { }

    ngOnInit() {
      this.dishservice.getFeaturedDish()
        .subscribe(dish => this.dish = dish, errmess => this.dishErrMess = <any>errmess);
      this.promotionService.getFeaturedPromotion()
        .subscribe(promotion => this.promotion = promotion,
          errmess => this.promotionErrMess = <any>errmess);
       this.LeaderService.getFeaturedLeader()
        .subscribe(featureLeader => this.featureLeader = featureLeader, 
          errmess => this.leaderErrMess = <any>errmess);
    }

}
