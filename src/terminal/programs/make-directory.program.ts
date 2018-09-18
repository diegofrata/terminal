import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";
import { FileSystemService } from "../core/file-system.service";
import { Color } from "../core/color";

@Injectable()
@Program({
    alias: 'mkdir',
    description: 'Creates a new directory.'
})
export class MakeDirectoryProgram extends ProgramBase {

    constructor(private fs: FileSystemService) {
        super();
    }

    async main(args: string[]) {
        try {
            this.fs.createDirectory(args[0]);
        } catch (e) {
            this.frame.writeLine(e, Color.Red);
        }

    }
}