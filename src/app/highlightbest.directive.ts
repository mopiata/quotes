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
