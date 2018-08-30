import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";
import { LoginService } from "../core/login.service";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Alias('shell')
export class ShellProgram extends Program {
    host = 'terminal';
    currentUser: { username: string, admin: boolean };

    constructor(private loginService: LoginService, private fs: FileSystemService, private injector: Injector) { 
        super();
    }

    async main() {
        const subscription = this.loginService.currentUser.subscribe(x => this.currentUser = x);
        while (await this.prompt());
        subscription.unsubscribe();
    }

    async prompt() {
        this.frame.write(`${this.host}:${this.fs.currentDirectory.toPath()} ${this.currentUser.username}$ `);
        const line = await this.frame.readLine();
        this.frame.writeLine('');

        const command = this.parse(line);

        if (command.name === 'exit') {
            this.frame.writeLine('Bye.');
            return false;
        } 
        
        const programName = PROGRAMS[command.name];

        if (programName) {
            const program: Program = this.injector.get(programName);
            await program.run(await this.frame.createFrame(), command.args);
        } else if (command.name) {
            this.frame.writeLine(`${command.name}: command not found`);
        }

        return true;
    }

    parse(line: string) {
        const tokens = line.split(' ');
        return { name: tokens[0], args: tokens.slice(1) };
    }
}