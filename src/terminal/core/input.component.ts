import { Component, OnInit, ElementRef, AfterViewInit, ViewChild, Renderer2, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'terminal-input',
  template: '<span #input class="input" [attr.contenteditable]="editable"></span>'
})
export class InputComponent implements OnInit {
  @ViewChild('input') private input;
  editable = true;
  private handlers: (() => void)[];

  @Output() line: EventEmitter<string> = new EventEmitter<string>();

  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
    this.focus();

    this.handlers = [
      this.renderer.listen(this.input.nativeElement, 'blur', () => this.focus()),
      this.renderer.listen(this.input.nativeElement, 'keydown', e => this.checkEnter(e))
    ];
  }

  private focus() {
    setTimeout(() => {
      this.input.nativeElement.focus()

      const range = document.createRange();
      range.selectNodeContents(this.input.nativeElement);
      range.collapse(false);

      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);

    }, 0);
  }

  private checkEnter(e) {
    if (e.key === 'Enter') {
      e.preventDefault();
      
      this.editable = false;
      
      for (const destroyable of this.handlers) {
        destroyable();
      }

      this.handlers = null;

      this.line.emit(this.input.nativeElement.innerText);
      this.line.complete();
    }
  }
}