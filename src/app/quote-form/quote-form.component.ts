import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-form',
  templateUrl: './quote-form.component.html',
  styleUrls: ['./quote-form.component.css']
})
export class QuoteFormComponent implements OnInit {

  quotes:Quote[];

  newQuote = new Quote("","","",new Date(),0,0);

  constructor() { }

  ngOnInit() {
  }

}
