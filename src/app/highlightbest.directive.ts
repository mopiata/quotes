import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appHighlightbest]'
})
export class HighlightbestDirective {

  constructor(private elem:ElementRef) { }

  // @Input() myHighlight: boolean;

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
