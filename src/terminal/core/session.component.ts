import { Component, Injector } from '@angular/core';
import { ActivatedRoute, Router, ParamMap, NavigationEnd, ActivationEnd } from '@angular/router';
import { BootProgram } from '../programs/restart.program';
import { LoginProgram } from '../programs/login.program';
import { ShellProgram } from '../programs/shell.program';
import { TerminalComponent } from './terminal.component';
import { first, filter } from 'rxjs/operators';

function initGA() {
    let w: any = window;
    w.dataLayer = w.dataLayer || [];
    w.dataLayer.push('js', new Date());
    w.dataLayer.push('config', 'UA-139433840-1');
}

@Component({
    selector: 'terminal-session',
    template: '<router-outlet (activate)="onActivate($event)"></router-outlet>',
})
export class SessionComponent {
    terminal: TerminalComponent;
    params: ParamMap;

    constructor(private injector: Injector, router: Router) {
        initGA();

        router.events.pipe(filter(x => x instanceof ActivationEnd), first()).subscribe(async (x: ActivationEnd) => {
            this.params = x.snapshot.paramMap;

            // const boot = this.injector.get(BootProgram);
            const login = this.injector.get(LoginProgram);
            const shell = this.injector.get(ShellProgram);
            if (this.params.keys.length) {
                await login.run(await this.terminal.createFrame(), [this.params.get('user'), this.params.get('pwd')]);
                await shell.run(await this.terminal.createFrame(), [this.params.get('program')]);
            } else {
                // await boot.run(await this.terminal.createFrame(), []);
                await login.run(await this.terminal.createFrame(), []);
                await shell.run(await this.terminal.createFrame(), []);
            }
        });
    }

    onActivate(e) {
        this.terminal = e as TerminalComponent;
    }
}