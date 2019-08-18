import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '@angular/compiler';

@Component({
  selector: 'app-my-quote-details',
  templateUrl: './my-quote-details.component.html',
  styleUrls: ['./my-quote-details.component.css']
})
export class MyQuoteDetailsComponent implements OnInit {

  @Input() quote:Quote;
  @Output() isDelete=new EventEmitter<boolean>();

  quoteDelete(Delete:boolean){
    this.isDelete.emit(Delete);
  }

  constructor() { }

  ngOnInit() {
  }

}
