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
    new Quotes('Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes('Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes('Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
    new Quotes('Paulo Coelho','Inspiration','There is only one thing that makes a dream impossible to achieve: the fear of failure.',0,0,'Ronald',new Date()),
   
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
