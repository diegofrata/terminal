import { Component, OnInit, ViewChild } from '@angular/core';
import { TerminalComponent } from './core/terminal.component';
import { ShellProgram } from './programs/shell.program';

@Component({
    selector: 'frata-session',
    template: '<frata-terminal></frata-terminal>'
})
export class SessionComponent implements OnInit {
    @ViewChild(TerminalComponent) terminal: TerminalComponent;

    constructor(private shell: ShellProgram) {
    }

    async ngOnInit() {
        this.shell.run(await this.terminal.createFrame());
    }
}