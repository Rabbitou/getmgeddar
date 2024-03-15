import { Component } from '@angular/core';
import { MotivationalQuotesService } from 'src/app/services/motivational-quotes.service';

@Component({
  selector: 'mg-motivational-quotes',
  templateUrl: './motivational-quotes.component.html',
  styleUrls: ['./motivational-quotes.component.scss']
})
export class MotivationalQuotesComponent {
  constructor(private motivationalQuoteService: MotivationalQuotesService) {}

  // Define a method to fetch a motivational quote
  fetchMotivationalQuote() {
    this.motivationalQuoteService.getMotivationalQuote().subscribe(
      quote => {
        // Handle the received quote data here
        console.log(quote);
      },
      error => {
        // Handle error
        console.error(error);
      }
    );
  }
}