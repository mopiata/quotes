import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightbest]'
})
export class HighlightbestDirective {

  constructor(private elem:ElementRef) { }

  @Input('appHighlightbest') quotes: Quote[];



  // ngOnInit() {
  //   console.log(this.myHighlight)
  //   if (this.myHighlight) {
  //     console.log('highlight');
  //     this.elem.nativeElement.style.backgroundColor = 'aliceblue';    
  //   }
  // }

  // private highlight(isHighest){
  //   this.elem.nativeElement.style.backgroundColor = 'aliceblue';
  // }

}
