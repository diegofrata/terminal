import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";

@Injectable()
@Alias('clear')
export class ClearProgram extends Program {
    async main() {
        if (this.frame.parent)
            this.frame.parent.clear();
    }
}