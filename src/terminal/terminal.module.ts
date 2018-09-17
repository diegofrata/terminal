import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TerminalComponent } from './core/terminal.component';
import { LineBreakComponent } from "./core/line-break.component";
import { TextComponent } from "./core/text.component";
import { CaretComponent } from "./core/caret.component";
import { SessionComponent } from './core/session.component';
import { ShellProgram } from './programs/shell.program';
import { FrameComponent } from './core/frame.component';
import { InputComponent } from './core/input.component';
import { HiProgram } from './programs/hi.program';
import { makeProgramProvider } from './programs/program';
import { FrameContentDirective } from './core/frame-content.directive';
import { LoginProgram } from './programs/login.program';
import { LoginService } from './core/login.service';
import { FileSystemService } from './core/file-system.service';
import { MakeDirectoryProgram } from './programs/make-directory.program';
import { ListDirectoryProgram } from './programs/list-directory.program';
import { ChangeDirectoryProgram } from './programs/change-directory.program';
import { ClearProgram } from './programs/clear.program';
import { BootProgram } from './programs/boot.program';
import { GlitchComponent} from './core/glitch.component';
import { CountProgram } from './programs/count.program';

const programs = [
  ...makeProgramProvider(BootProgram),
  ...makeProgramProvider(ChangeDirectoryProgram),
  ...makeProgramProvider(ClearProgram),
  ...makeProgramProvider(CountProgram),
  ...makeProgramProvider(HiProgram),
  ...makeProgramProvider(ListDirectoryProgram),
  ...makeProgramProvider(LoginProgram),
  ...makeProgramProvider(MakeDirectoryProgram),
  ...makeProgramProvider(ShellProgram),
]

const entryComponents = [
  CaretComponent,
  TextComponent,
  LineBreakComponent,
  FrameComponent,
  InputComponent,
  GlitchComponent
];

@NgModule({
  declarations: [
    SessionComponent,
    TerminalComponent,
    FrameContentDirective,
    ...entryComponents
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [...programs, LoginService, FileSystemService],
  bootstrap: [SessionComponent],
  entryComponents: entryComponents
})
export class TerminalModule { 

}
