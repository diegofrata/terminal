import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";

@Injectable()
@Program({
    alias: 'clear',
    description: 'Clears all output from the screen.'
})
export class ClearProgram extends ProgramBase {
    async main() {
        let frame = this.frame;

        while (frame.parent) frame = frame.parent;

        frame.children.forEach(x => x.clear());
    }
}