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
  ];

  constructor() { }

  ngOnInit() {
  }

}
