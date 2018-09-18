import { Injectable, Injector } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";

@Injectable()
@Program({
    alias: 'clear', 
    description: 'Clears all output from the screen.'
})
export class ClearProgram extends ProgramBase {
    async main() {
        if (this.frame.parent)
            this.frame.parent.clear();
    }
}