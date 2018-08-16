

import { CaretComponent } from './caret.component';

import { Component, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { FrameComponent } from './frame.component';

@Component({
  selector: 'frata-terminal',
  template: '<ng-template frata-frame-content></ng-template>'
})
export class TerminalComponent extends FrameComponent implements AfterViewInit {

  constructor(componentFactoryResolver: ComponentFactoryResolver) {
    super(componentFactoryResolver);
  }

  ngAfterViewInit(): void {
    super.ngAfterViewInit();
    this.createComponent(CaretComponent);
  }
}

