import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks.service';
import { StockData } from '../../services/data';


@Component({
  selector: 'manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent {
  symbols: Array<string>;
  stock: string;
  stockData = StockData;

  constructor(private service: StocksService) {
    this.symbols = service.get();    
  } 

  add() {
    this.symbols = this.service.add(this.stock.toUpperCase());
    this.stock = "";
  }

  remove(symbol) {
    this.symbols = this.service.remove(symbol);
  }

  addStock(symbol) {
    this.symbols = this.service.add(symbol);
  }

}
