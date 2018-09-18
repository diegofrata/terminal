import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";
import { LoginService } from "../core/login.service";
import { Color } from "../core/color";

@Injectable()
@Program({
    alias: 'login',
    description: 'Allow a user to login with a username and password.'
})
export class LoginProgram extends ProgramBase {

    constructor(private loginService: LoginService) {
        super();
    }

    async main() {
        this.frame.write('login: ');
        const username = await this.frame.readLine();
        this.frame.writeLine();
        this.frame.write('password: ');
        const password = await this.frame.readLine(true); // TODO: mask
        this.frame.writeLine();

        try {
            this.loginService.login(username, password);
            this.frame.clear();
            this.frame.writeLine('Welcome back. Type \'help\' to see a list of supported commands.');
        } catch (e) {
            this.frame.writeLine(e, Color.Red);
            await this.main();
        }
    }
}