import { Pipe, PipeTransform } from '@angular/core';
import { CurrencyPipe, PercentPipe } from '../../../node_modules/@angular/common';
import { StockInterface } from '../services/stocks.service';

@Pipe({
  name: 'change'
})
export class ChangePipe implements PipeTransform {

  constructor(private currencyPipe: CurrencyPipe, private percentPipe: PercentPipe) {}

  // NOTE: must add CurrencyPipe, PercentPipe in app.module.ts
  transform(stock: StockInterface, showPercent: boolean = true): any {
    let value = `${this.currencyPipe.transform(stock.change, 'USD', 'symbol', '.2')}`;
    if (showPercent) {
      value += `${this.percentPipe.transform(stock.changeInPercent, '.2')}`;
    }
    return value;
  }
}


