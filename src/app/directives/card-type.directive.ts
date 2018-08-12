import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[cardType]'
})
export class CardTypeDirective implements OnInit {
  @Input() cardType; // this appCardType must be the same as "appCardType" in the selector!!
  @Input() increaseClass = 'increase';
  @Input() decreaseClass = 'decrease';

  constructor(private el: ElementRef) {}

  ngOnInit() {
    if (this.cardType) {
      console.log('cardType', this.cardType)
      if (this.cardType >= 0) {
        this.el.nativeElement.classList.add(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      } else if (this.cardType <= 0) {
        this.el.nativeElement.classList.add(this.decreaseClass);
        this.el.nativeElement.classList.remove(this.increaseClass);
      } else {
        this.el.nativeElement.classList.remove(this.increaseClass);
        this.el.nativeElement.classList.remove(this.decreaseClass);
      }
    }
  }
}