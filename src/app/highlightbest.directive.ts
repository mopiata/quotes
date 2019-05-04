import { Directive, ElementRef, Input } from '@angular/core';
import { Quote } from './quote';

@Directive({
  selector: '[appHighlightbest]'
})
export class HighlightbestDirective {

  constructor(private elem:ElementRef) { }

  @Input('appHighlightbest') quotes: Quote[];

  highlight(){
    if(this.quotes[0]){
      this.elem.nativeElement.style.backgroundColor = 'aliceblue';
    }else{
      this.elem.nativeElement.style.backgroundColor = 'transparent';
    }
  }

  ngOnInit(){
    this.highlight();
  }
}
