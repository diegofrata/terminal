import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";

@Injectable()
@Alias('hi')
export class HiProgram extends Program {

    async main() {
        this.frame.writeLine('Hi you!');
    }
}