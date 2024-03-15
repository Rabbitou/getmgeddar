import { Component, Input } from '@angular/core';
import { SubscriptionPlan } from 'src/environments/subscription-plan';

@Component({
  selector: 'mg-subscription-plan',
  templateUrl: './subscription-plan.component.html',
  styleUrls: ['./subscription-plan.component.scss']
})
export class SubscriptionPlanComponent {
  @Input() plan!: SubscriptionPlan;
}
