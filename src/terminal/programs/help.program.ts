import { Injectable } from "@angular/core";
import { ProgramBase, Program, PROGRAMS } from "./program";
import { max, padEnd } from "lodash";
import { Color } from "../core/color";

@Injectable()
@Program({
    alias: 'help', 
    description: 'Displays a list of all supported commands.',
    hide: true
})
export class HelpProgram extends ProgramBase {

    async main() {
        this.frame.writeLine('These are the supported commands: ');
        this.frame.writeLine();

        const keys = Object.keys(PROGRAMS).sort();
        const maxLength = max(keys.map(x => x.length));

        keys.filter(x => PROGRAMS[x].hide != true).forEach(element => {
            this.frame.write(`${element}`, Color.BrightGreen);
            this.frame.writeLine(`: ${PROGRAMS[element].description}`);
        });
        this.frame.writeLine();
    }
}