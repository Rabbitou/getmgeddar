import { Component } from '@angular/core';
import { SubscriptionPlan } from 'src/environments/subscription-plan';

@Component({
  selector: 'mg-plan',
  templateUrl: './plan.component.html',
  styleUrls: ['./plan.component.scss']
})
export class PlanComponent {
  subscriptionPlans: SubscriptionPlan[] = [
    { name: 'Basic', price: 10, features: ['Access to Gym', 'Access to Pool'] },
    { name: 'Standard', price: 20, features: ['Access to Gym', 'Access to Pool', 'Nutrisionist Expert'] },
    { name: 'Premium', price: 30, features: ['Access to Gym', 'Access to Pool', 'Nutrisionist Expert', 'Personal Trainer'] }
  ];
}
