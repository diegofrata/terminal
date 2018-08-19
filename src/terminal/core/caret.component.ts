import { Component } from '@angular/core';
@Component({
  selector: 'terminal-caret',
  template: '<span class="caret">█</span>',
  styles: [
    `           
      @keyframes blinker {
        from {opacity: 1.0;}
        to {opacity: 0.0;}
      }
      .caret{
        animation-name: blinker;
        animation-duration: 0.6s;
        animation-iteration-count: infinite;
        animation-timing-function: cubic-bezier(1, 0, 0, 1);
        animation-direction: alternate;
      }
    `
  ]
})
export class CaretComponent {
}