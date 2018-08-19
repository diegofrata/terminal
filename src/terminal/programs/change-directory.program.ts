import { Injectable } from "@angular/core";
import { Program, Alias } from "./program";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Alias('cd')
export class ChangeDirectoryProgram extends Program {

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