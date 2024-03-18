import { Component } from "@angular/core";
import { MotivationalQuotesService } from "src/app/services/motivational-quotes.service";

@Component({
  selector: "mg-motivational-quotes",
  templateUrl: "./motivational-quotes.component.html",
  styleUrls: ["./motivational-quotes.component.scss"],
})
export class MotivationalQuotesComponent {
  constructor(private motivationalQuoteService: MotivationalQuotesService) {}
  quoteP: string = "Loading...";

  ngOnInit() {
    this.fetchMotivationalQuote();
  }

  fetchMotivationalQuote() {
    this.motivationalQuoteService.getMotivationalQuote().subscribe({
      next: (quote: any) => (this.quoteP = quote[0].q),
      error: (error) => {
        this.quoteP = "Something went wrong check console !";
        console.log(error);
      },
    });
  }
}
