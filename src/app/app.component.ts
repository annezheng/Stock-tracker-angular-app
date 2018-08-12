import { Component, OnInit, OnDestroy } from '@angular/core';
import { StockInterface, StocksService } from './services/stocks.service';

let newsSources: Array<string> = ['the-wall-street-journal', 'bloomberg', 'cnbc', 'financial-times', 'the-new-york-times'];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  interval: any;  
  index: number = 0;
  source: string = newsSources[this.index];

  ngOnInit(): void{
    this.interval = setInterval(() => {
      this.source =  newsSources[this.index];
      this.index += 1;
      if (this.index == newsSources.length) {
        this.index = 0;
      }      
    }, 15000)
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
  }

}
