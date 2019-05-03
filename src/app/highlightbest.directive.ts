import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appHighlightbest]'
})
export class HighlightbestDirective {

  constructor(private elem:ElementRef) { 
    this.elem.nativeElement.style.backgroundColor = 'aliceblue';
  }

  // private highlight(isHighest){
  //   this.elem.nativeElement.style.backgroundColor = 'aliceblue';
  // }

}
