import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Program({
    alias: 'cd',
    description: 'Changes to a different directory.'
})
export class ChangeDirectoryProgram extends ProgramBase {

    constructor(private fs: FileSystemService) {
        super();
    }

    async main(args: string[]) {
        try {
            this.fs.changeDirectory(args[0])
        } catch (e) {
            this.frame.writeLine(e);
        }
    }
}