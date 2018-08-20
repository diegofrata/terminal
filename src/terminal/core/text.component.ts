import { Component } from '@angular/core';
import { Color } from './color';
import { kebabCase } from 'lodash';

@Component({
  selector: 'terminal-text',
  template: '<span [class]="getColor(color)">{{text}}</span>',
  styles: [
    `
    span { white-space: pre-wrap; }
    `
  ]
})
export class TextComponent {
  text = "";
  color: Color;

  getColor(color: Color) {
    const style = kebabCase(Color[color ? color : Color.Text]);
    return `color-${style}`;
  }
}