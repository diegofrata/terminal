import { Component } from '@angular/core';
@Component({
  selector: 'terminal-text',
  template: '<span>{{text}}</span>',
  styles: [
    `
    span { white-space: pre-wrap; }
    `
  ]
})
export class TextComponent {
  text = "";
}