import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";

@Injectable()
@Alias('shell')
export class ShellProgram extends Program {
    host = 'frata';
    user = 'login';
    cwd = '/';

    constructor(private injector: Injector) { 
        super();
    }

    async main() {
        while (await this.prompt());
    }

    async prompt() {
        this.frame.write(`${this.host}:${this.cwd} ${this.user}$ `);
        const line = await this.frame.readLine();
        this.frame.writeLine('');

        const command = this.parse(line);

        if (command.name === 'exit') {
            this.frame.writeLine('Bye.');
            return false;
        } 
        
        const programName = PROGRAMS[command.name];

        if (programName){
            const program: Program = this.injector.get(programName);
            await program.run(await this.frame.createFrame());
        } else {
            this.frame.writeLine(`${command.name}: command not found`);
        }

        return true;
    }

    parse(line: string) {
        const tokens = line.split(' ');
        return { name: tokens[0], args: tokens.slice(1) };
    }
}