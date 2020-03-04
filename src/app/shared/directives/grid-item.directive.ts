import {Directive, ElementRef, HostBinding, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appGridItem]'
})
export class GridItemDirective implements OnInit {
@HostBinding('style.display') display = 'grid';
  constructor(
    private el: ElementRef,
    private rd2: Renderer2
  ) {
    rd2.setStyle(el.nativeElement, 'display', 'grid');
    rd2.setStyle(el.nativeElement, 'grid-template-areas', `'image''title'`);
    rd2.setStyle(el.nativeElement, 'place-items', 'center');
    rd2.setStyle(el.nativeElement, 'width', '4rem');
  }

  ngOnInit(): void {
  }

}
