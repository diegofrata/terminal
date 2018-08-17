import { Component } from '@angular/core';
@Component({
  selector: 'terminal-text',
  template: '<span>{{text}}</span>'
})
export class TextComponent {
  text = "";
}