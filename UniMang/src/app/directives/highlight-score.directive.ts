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
      this.el.nativeElement.style.color = '#60e464ff';
    } else if (this.appHighlightScore >= 6) {
      this.el.nativeElement.style.color = '#f5e55aff';
    } else {
      this.el.nativeElement.style.color = '#f55767ff'; 
    }
    this.el.nativeElement.style.borderRadius = '8px';
  }
}