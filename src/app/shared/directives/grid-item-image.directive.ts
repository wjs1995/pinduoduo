import {Directive, ElementRef, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItemImage]'
})
export class GridItemImageDirective implements OnInit {
  @Input() color = 'green';

  constructor(
    private el: ElementRef,
    private rd2: Renderer2
  ) {

  }

  ngOnInit(): void {
    this.rd2.setStyle(this.el.nativeElement, 'grid-area', 'image');
    this.rd2.setStyle(this.el.nativeElement, 'background-color', this.color);
    this.rd2.setStyle(this.el.nativeElement, 'height', '50px');
    this.rd2.setStyle(this.el.nativeElement, 'width', '50px');
  }

  @HostListener('click', ['$event'])
  handle($event) {
    console.log($event);
  }

}
