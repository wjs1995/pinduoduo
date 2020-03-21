import {Inject, Injectable, Type} from '@angular/core';
import {ChildConfig, DomService} from './dom.service';
import {DOCUMENT} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DialogService {
  private readonly dialogElementId = 'dialog-container';
  private readonly overlayElementId = 'overlay';
  private data$ = new BehaviorSubject<object | null>(null);

  constructor(
    private dom: DomService,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  getData() {
    return this.data$.asObservable();
  }

  saveData(val: object) {
    this.data$.next(val);
  }

  open(components: Type<any>, childConfig: ChildConfig) {
    this.dom.appendComponentTo(this.dialogElementId, components, childConfig);
    if (childConfig.position) {
      const element = this.document.getElementById(this.dialogElementId);
      element.style.top = childConfig.position.top;
      element.style.width = childConfig.position.width;
      element.style.height = childConfig.position.height;
      element.style.left = childConfig.position.left;
    }
    this.toggleAll();
    this.data$.next(null)
  }

  close() {
    this.dom.removeComponent();
    this.toggleAll();
  }

  toggleAll() {
    this.toggleVisible(this.document.getElementById(this.dialogElementId));
    this.toggleVisible(this.document.getElementById(this.overlayElementId));
  }

  toggleVisible(element: Element) {
    if (element.classList.contains('show')) {
      element.classList.remove('show');
      element.classList.add('hidden');
      return;
    }

    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.add('show');
      return;
    }
  }
}
