import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SummaryComponent } from './components/summary/summary.component';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { StocksService } from './services/stocks.service';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ManageComponent } from './components/manage/manage.component';
import { FormsModule } from '@angular/forms';
import { AppRoutes } from './app.routes';
import { AboutComponent } from './components/about/about.component';
import { CardTypeDirective } from './directives/card-type.directive';
import { CardHoverDirective } from './directives/card-hover.directive';
import { DelayDirective } from './directives/delay.directive';
import { ChangePipe } from './pipes/change.pipe';

import { CurrencyPipe, PercentPipe } from '@angular/common';
import { ChangeDetectorPipe } from './pipes/change-detector.pipe';
import { NewsPipe } from './pipes/news.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SummaryComponent,
    DashboardComponent,
    ManageComponent,
    AboutComponent,
    CardTypeDirective,
    CardHoverDirective,
    DelayDirective,
    ChangePipe,
    ChangeDetectorPipe,
    NewsPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutes
  ],
  providers: [
    StocksService,
    CurrencyPipe,
    PercentPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
