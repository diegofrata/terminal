import { Component, OnInit, ViewChild, Injector } from '@angular/core';
import { TerminalComponent } from './terminal.component';
import { ShellProgram } from '../programs/shell.program';
import { LoginProgram } from '../programs/login.program';
import { BootProgram } from '../programs/boot.program';

@Component({
    selector: 'terminal-session',
    template: '<terminal-terminal></terminal-terminal>',
})
export class SessionComponent implements OnInit {
    @ViewChild(TerminalComponent) terminal: TerminalComponent;

    constructor(private injector: Injector) {
    }

    async ngOnInit() {
        const boot = this.injector.get(BootProgram);
        // await boot.run(await this.terminal.createFrame(), []);
        const login = this.injector.get(LoginProgram);
        await login.run(await this.terminal.createFrame(), []);
        const shell = this.injector.get(ShellProgram);
        await shell.run(await this.terminal.createFrame(), []);
    }
}