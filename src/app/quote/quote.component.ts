import { Component, OnInit, ViewChild } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
   
  quotes=[ ];

  // if(){
  //   val=true;
  // } else{
  //   val=false;
  // }

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

  addNewQuote(quote){
    this.quotes.push(quote);
  }

  quoteLiked(isLiked, index){
    this.quotes[index].upVote = this.quotes[index].upVote+1;
  }

  quoteDisliked(isDisliked,index){
    this.quotes[index].downVote = this.quotes[index].downVote + 1;
  }

  constructor() { }

  ngOnInit() {
    this.quotes.sort((a, b) => { return b.upVote - a.upVote });
    console.log(this.quotes);
  }

}
