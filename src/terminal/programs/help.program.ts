import { Injectable } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";
import { max, padEnd } from "lodash";

@Injectable()
@Program({
    alias: 'help', 
    description: 'Displays a list of all supported commands.'
})
export class HelpProgram extends ProgramBase {

    async main() {
        this.frame.writeLine('These are the supported commands: ');
        this.frame.writeLine();

        const keys = Object.keys(PROGRAMS);
        const maxLength = max(keys.map(x => x.length));

        keys.forEach(element => {
            this.frame.writeLine(`${padEnd(element, maxLength, ' ')} | ${PROGRAMS[element].description}`);
        });
        this.frame.writeLine();
    }
}