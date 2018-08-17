import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { TerminalComponent } from './terminal.component';
import { ShellProgram } from '../programs/shell.program';
import { LoginService } from './login.service';
import { LoginProgram } from '../programs/login.program';

@Component({
    selector: 'terminal-session',
    template: '<terminal-terminal></terminal-terminal>',
})
export class SessionComponent implements OnInit {
    @ViewChild(TerminalComponent) terminal: TerminalComponent;

    constructor(private injector: Injector) {
    }

    async ngOnInit() {
        const login = this.injector.get(LoginProgram);
        await login.run(await this.terminal.createFrame());
        const shell = this.injector.get(ShellProgram);
        await shell.run(await this.terminal.createFrame());
    }
}