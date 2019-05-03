import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  // public quoteBody: string, public author: string, public submitter: string, 
  // public date: Date, public upVote: number, public downVote: number
  quotes=[
    new Quote('Money is Power','Unknown','Maggie',new Date(),0,0),
    new Quote('Akili ni nywele', 'Mhenga', 'Peter', new Date(), 0, 0),
  ];

  toggleDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isObsolete, index){
    if(isObsolete){
      let toDelete = confirm(`Are you sure you want to delete "${this.quotes[index].quoteBody}"`);

      if (toDelete) {
      this.quotes.splice(index,1);
      }
    }
  }


  constructor() { }

  ngOnInit() {
  }

}
