import { Injectable, Injector } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";

@Injectable()
@Program({
    alias: 'hi', 
    description: 'Says hi to the user.'
})
export class HiProgram extends ProgramBase {

    async main() {
        this.frame.writeLine('Hi you!');
    }
}