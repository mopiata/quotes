import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-quote-details',
  templateUrl: './quote-details.component.html',
  styleUrls: ['./quote-details.component.css']
})
export class QuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isObsolete = new EventEmitter<boolean>();
  @Output() isLiked = new EventEmitter<boolean>();
  @Output() isDisliked = new EventEmitter<boolean>();


  quoteDelete(deleteQuoteValue:boolean){
    this.isObsolete.emit(deleteQuoteValue);
  }

  likeQuote(likeQuote:boolean){
    this.isLiked.emit(likeQuote);
  }

  dislikeQuote(dislikeQuote:boolean){
    this.isDisliked.emit(dislikeQuote);
  }
  
  constructor() { }

  ngOnInit() {
  }

}
