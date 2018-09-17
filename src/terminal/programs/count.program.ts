import { Injectable, Injector } from "@angular/core";
import { Program, Alias, PROGRAMS } from "./program";

@Injectable()
@Alias('count')
export class CountProgram extends Program {

    async main() {
        let i = 0;
        while (i < 50) {
            this.frame.writeLine((++i).toString());
        }
    }
}