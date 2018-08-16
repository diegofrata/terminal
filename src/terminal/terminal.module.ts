import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { TerminalComponent } from './core/terminal.component';
import { LineBreakComponent } from "./core/line-break.component";
import { TextComponent } from "./core/text.component";
import { CaretComponent } from "./core/caret.component";
import { SessionComponent } from './session.component';
import { ShellProgram } from './programs/shell.program';
import { FrameComponent } from './core/frame.component';
import { InputComponent } from './core/input.component';
import { HiProgram } from './programs/hi.program';
import { makeProgramProvider } from './programs/program';
import { FrameContentDirective } from './core/frame-content.directive';

const providers = [
  ...makeProgramProvider(ShellProgram),
  ...makeProgramProvider(HiProgram),
]

const entryComponents = [
  CaretComponent,
  TextComponent,
  LineBreakComponent,
  FrameComponent,
  InputComponent
];

@NgModule({
  declarations: [
    SessionComponent,
    TerminalComponent,
    FrameContentDirective,
    ...entryComponents
  ],
  imports: [
    BrowserModule
  ],
  providers: [...providers],
  bootstrap: [SessionComponent],
  entryComponents: entryComponents
})
export class TerminalModule { 

}
