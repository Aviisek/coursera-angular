import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  featureLeader: Leader;

  constructor(private dishservice: DishService,
    private promotionService: PromotionService,
    private LeaderService: LeaderService) { }

    ngOnInit() {
      this.dishservice.getFeaturedDish()
        .then(dish => this.dish = dish);
      this.promotionService.getFeaturedPromotion()
        .then(promotion => this.promotion = promotion);
       this.LeaderService.getFeaturedLeader()
        .then(featureLeader => this.featureLeader = featureLeader);
    }

}
