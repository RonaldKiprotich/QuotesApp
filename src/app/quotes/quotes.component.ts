// import { Quote } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Quotes } from '../quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  quotes: Quotes[]=[
    new Quotes(0,'Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes(1,'Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes(2,'Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes(3,'Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
   
  ]
  getCurrentId(){
    return this.quotes.length +1
  }
  newQuote(quote) {
    quote.id = this.getCurrentId();
    quote.author= quote.author;
    quote.title=quote.title;
    quote.quote=quote.quote;
    quote.submitedBy=quote.submitedBy;
    this.quotes.unshift(quote)
  }
  constructor() { }

  ngOnInit(): void {
  }

}
