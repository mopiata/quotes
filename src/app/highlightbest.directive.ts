import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightbest]'
})
export class HighlightbestDirective {

  constructor(private elem:ElementRef) { }

  @Input('appHighlightbest') quotes: Quote[];

  highlight(){   
      this.elem.nativeElement.style.backgroundColor = 'aliceblue';
  }

  ngOnInit(){
    this.highlight();
  }
}
