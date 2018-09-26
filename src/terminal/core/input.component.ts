import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Renderer2, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';

import * as $ from 'jquery';

@Component({
  selector: 'terminal-input',
  template: `
    <input #focusTarget class="input" [(ngModel)]="text" autocorrect="off" autocapitalize="none">
    <span [ngClass]="{'input--secret': secret}">{{printableText}}</span>
    `,
  styles: [
    ` .input {
        position: absolute;
        left: -9999px;       
      }
      .input--secret {
        font-size: 2em;
        line-height: 0;
        vertical-align: middle;
        letter-spacing: -0.15em;
      }
    `
  ]
})
export class InputComponent implements OnInit {
  @ViewChild('focusTarget') private focusTarget;
  private handlers: (() => void)[];

  editable = true;
  secret = false;
  text = '';

  @Output() line: EventEmitter<string> = new EventEmitter<string>();

  constructor(private renderer: Renderer2, private elRef: ElementRef) {
  }

  ngOnInit() {
    this.focus();

    this.handlers = [
      this.renderer.listen(document, 'touchend', (e) => { this.focus(e); }),
      this.renderer.listen(document, 'click', (e) => this.focus(e)),
      this.renderer.listen(this.focusTarget.nativeElement, 'keydown', e => this.checkEnter(e))
    ];
  }

  get printableText() {
    if (!this.secret) return this.text;
    return ''.padStart(this.text.length, '•');

  }

  private focus(e?) {
    if (this.focusTarget.nativeElement) {
      this.focusTarget.nativeElement.focus();
    }
  }

  private checkEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();

      this.editable = false;

      for (const destroyable of this.handlers) {
        destroyable();
      }

      this.handlers = null;

      this.renderer.removeChild(this.elRef.nativeElement, this.focusTarget.nativeElement);
      this.focusTarget = null;

      this.line.emit(this.text);
      this.line.complete();
    }
  }
}
