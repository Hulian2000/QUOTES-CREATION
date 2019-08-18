import { Component, OnInit } from '@angular/core';
import { Quote } from '../quotes';

@Component({
  selector: 'app-my-quotes',
  templateUrl: './my-quotes.component.html',
  styleUrls: ['./my-quotes.component.css']
})
export class MyQuotesComponent implements OnInit {
  quotes:Quote[]=[
    new Quote(1,"Every dog has its  own day","Patrick Jungle","Hulian Juba",new Date(2019,0,12)),
    new Quote(2,'The fear of the Lord is the beginning of wisdom','Sabrina Mwashi','Hulian Juba',new Date(2019,1,12)),
    new Quote(3,'No matter how dry the jungle is,the Lion can not eat grass','Kayren Stars','Hulian Juba',new Date(2019,3,13)),
    new Quote(4,'You can play with your mothers titties but you cannot play with your fathers testicles','African man','Hulian Juba',new Date(2019,4,28)),
    new Quote(5,'Every success is a growth to the wise','Lawrence Drawner','Hulian Juba',new Date(2019,5,14)),
    new Quote(6,'In every succeful man there are so many sacrifice he had to give up','Augusto Mon','Hulian Juba',new Date(2019,6,12)),
    new Quote(7,'Everything that was and is,was in God','Mathew Flirt','Hulian Juba',new Date(2019,7,19)),
    new Quote(8,'God is the source of all potential','Ajigan New','Hulian Juba',new Date(2019,8,21)),
  ];

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.dateCreated = new Date(quote.dateCreated);
    this.quotes.push(quote);
  }

  showDetails(index){
    this.quotes[index].showDetails = !this.quotes[index].showDetails;
  }

  deleteQuote(isDelete, index){
    if(isDelete){

      let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name} this quote?`);

      if(toDelete){
        this.quotes.splice(index,1);
      }
      
    }
  }


    


  constructor() { }

  ngOnInit() {
  }

}
