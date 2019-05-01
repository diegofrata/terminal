import { Injectable, Injector } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";
import { LoginService } from "../core/login.service";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Program({
    alias: 'shell',
    description: 'Starts a new shell that can take commands.',
    hide: true
})
export class ShellProgram extends ProgramBase {
    host = 'terminal';
    currentUser: { username: string, admin: boolean };

    constructor(private loginService: LoginService, private fs: FileSystemService, private injector: Injector) {
        super();
    }

    async main(args: string[]) {
        const subscription = this.loginService.currentUser.subscribe(x => this.currentUser = x);

        if (args && args.length) {
            this.printDir();
            this.frame.write(args[0])
            this.frame.writeLine();
            await this.tryRun(args[0]);
        }

        while (await this.prompt());
        subscription.unsubscribe();
    }

    async prompt() {
        this.printDir();
        const line = await this.frame.readLine();
        this.frame.writeLine('');

        await this.tryRun(line);

        
        return true;
    }

    printDir() {
        this.frame.write(`${this.host}:${this.fs.currentDirectory.toPath()} ${this.currentUser.username}$ `);
    }

    async tryRun(line) {
        const command = this.parse(line);

        if (command.name === 'exit') {
            this.frame.writeLine('Bye.');
            return false;
        }

        const programDefinition = PROGRAMS[command.name];

        if (programDefinition) {
            const program: ProgramBase = this.injector.get(programDefinition.target);
            await program.run(await this.frame.createFrame(), command.args);
        } else if (command.name) {
            this.frame.writeLine(`${command.name}: command not found`);
        }

    }

    parse(line: string) {
        const tokens = line.split(' ');
        return { name: tokens[0], args: tokens.slice(1) };
    }
}