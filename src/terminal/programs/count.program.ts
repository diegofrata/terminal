import { Injectable, Injector } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";

@Injectable()
@Program({
    alias: 'count',
    description: 'Counts to 50.'
})
export class CountProgram extends ProgramBase {

    async main() {
        let i = 0;
        while (i < 50) {
            this.frame.writeLine((++i).toString());
        }
    }
}