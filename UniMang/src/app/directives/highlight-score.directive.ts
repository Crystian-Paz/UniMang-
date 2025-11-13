import { Directive, ElementRef, Input, OnChanges } from '@angular/core';

@Directive({
  selector: '[appHighlightScore]',
  standalone: true
})
export class HighlightScoreDirective implements OnChanges {
  @Input() appHighlightScore!: number;

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    if (this.appHighlightScore >= 8) {
      this.el.nativeElement.style.backgroundColor = '#c8e6c9';
    } else if (this.appHighlightScore >= 6) {
      this.el.nativeElement.style.backgroundColor = '#fff9c4';
    } else {
      this.el.nativeElement.style.backgroundColor = '#ffcdd2'; 
    }
    this.el.nativeElement.style.borderRadius = '8px';
  }
}
