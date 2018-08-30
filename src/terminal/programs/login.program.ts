import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";
import { LoginService } from "../core/login.service";
import { Color } from "../core/color";
import { GlitchComponent } from "../core/glitch.component";

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
        const password = await this.frame.readLine(true); // TODO: mask
        this.frame.writeLine();

        try {
            this.loginService.login(username, password);
            this.frame.clear();
        } catch (e) {
            this.frame.writeLine(e, Color.Red);
            await this.main();
        }
    }
}