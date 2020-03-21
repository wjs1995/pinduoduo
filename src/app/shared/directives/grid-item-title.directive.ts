import {Directive, ElementRef, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItemTitle]'
})
export class GridItemTitleDirective implements OnInit {
  @Input() appGridItemTitle = 'yellow';

  constructor(
    private el: ElementRef,
    private rd2: Renderer2
  ) {
    rd2.setStyle(el.nativeElement, 'grid-area', 'title');
  }

  ngOnInit(): void {
    this.rd2.setStyle(this.el.nativeElement, 'color', this.appGridItemTitle);
    this.rd2.setStyle(this.el.nativeElement, 'font-size', '0.6rem');
  }

}
