import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";
import { LoginService } from "../core/login.service";

@Injectable()
@Alias('login')
export class LoginProgram extends Program {

    constructor(private loginService: LoginService) {
        super();
    }

    async main() {
        this.frame.write('login: ');
        const username = await this.frame.readLine();
        this.frame.writeLine();
        this.frame.write('password: ');
        const password = await this.frame.readLine(); // TODO: mask
        this.frame.writeLine();

        try {
            this.loginService.login(username, password);
        } catch (e) {
            this.frame.writeLine(e);
            await this.main();
        }
    }
}