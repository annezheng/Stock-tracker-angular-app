import { Directive, ElementRef, OnInit, HostListener, AfterViewInit } from '@angular/core';

@Directive({
  selector: '[cardHover]'
})
export class CardHoverDirective implements AfterViewInit {
  card: any;

  constructor(private el: ElementRef) { }

  /*
  ngOnInit() {
    // NOTE: background color will NOT update because it is caller BEFORE ngOnInit in card-type.directive.ts
    this.card = this.el.nativeElement.querySelector('.mdl-card');
    console.log('this.card.classList', this.card.classList.length);    
    if (this.card.classList.contains('increase')) {
      console.log('increase');
      this.card.style.backgroundColor = 'rgb(63,81,181)'; 
    } else if (this.card.classList.contains('descrease')) {
      console.log('descrease');
      this.card.style.backgroundColor = 'rgb(255,174,64)';
    } else {
      console.log('empty');
      this.card.style.backgroundColor = '';      
    }
  } 
  */


  // ngAfterViewInit - Respond after Angular initializes the component's views and child views / the view that a directive is in.
  ngAfterViewInit() {
    // NOTE: background color will update because it is caller AFTER ngOnInit in card-type.directive.ts
    this.card = this.el.nativeElement.querySelector('.mdl-card');
    console.log('this.card.classList', this.card.classList.length);
    if (this.card.classList.contains('increase')) {
      console.log('increase');
      // this.card.style.backgroundColor = 'rgb(118, 204, 147)';
      this.card.style.backgroundColor = '#76CC93';
    } else if (this.card.classList.contains('decrease')) {
      console.log('decrease');
      // this.card.style.backgroundColor = 'rgb(247, 103, 78)';
      this.card.style.backgroundColor = '#F7674E';
    } else {
      console.log('empty');
      this.card.style.backgroundColor = '';
    }
  }

  @HostListener('mouseover') onMouseOver() {
    this.card.style.boxShadow = '5px 5px 5px #999';    
    this.card.style.top = '-5px';
  }

  @HostListener('mouseout') onMouseOut() {
    this.card.style.boxShadow = '';
    this.card.style.top = ''; 
  }
}
