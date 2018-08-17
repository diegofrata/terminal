

import { CaretComponent } from './caret.component';

import { Component, ComponentFactoryResolver, OnInit, AfterViewInit } from '@angular/core';
import { FrameComponent } from './frame.component';

@Component({
  selector: 'terminal-terminal',
  template: '<ng-template terminal-frame-content></ng-template>'
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

