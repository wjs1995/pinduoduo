import {ApplicationRef, ComponentFactoryResolver, ComponentRef, EmbeddedViewRef, Inject, Injectable, Injector, Type} from '@angular/core';
import {DOCUMENT} from '@angular/common';

export interface ChildConfig {
  inputs: object;
  outputs: object;
  position?: DialogPos;
}

export interface DialogPos {
  top: string;
  left: string;
  width: string;
  height: string;
}

@Injectable({
  providedIn: 'root'
})
export class DomService {
  private childComponentRef: ComponentRef<any>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private applicationRef: ApplicationRef,
    private inject: Injector,
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  appendComponentTo(
    parentId: string,
    child: Type<any>,
    childConfig: ChildConfig
  ) {
    const childComponentRef = this.resolver.resolveComponentFactory(child).create(this.inject);
    this.attachConfig(childConfig, childComponentRef);

    this.applicationRef.attachView(childComponentRef.hostView);
    this.childComponentRef = childComponentRef;
    const childDOMElement = (childComponentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    this.document.getElementById(parentId).appendChild(childDOMElement);
  }

  attachConfig(config: ChildConfig, componentRef: ComponentRef<any>) {
    const inputs = config.inputs;
    const outputs = config.outputs;
    for (const key in inputs) {
      if (inputs.hasOwnProperty(key)) {
        const element = inputs[key];
        componentRef.instance[key] = element;
      }
    }

    for (const key in outputs) {
      if (outputs.hasOwnProperty(key)) {
        const element = outputs[key];
        componentRef.instance[key] = element;
      }
    }
  }

  removeComponent() {
    this.applicationRef.detachView(this.childComponentRef.hostView);
  }
}
