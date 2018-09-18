import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "./program";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Program({
    alias: 'ls',
    description: 'List all directories and files in a directory.'
})
export class ListDirectoryProgram extends ProgramBase {

    constructor(private fs: FileSystemService) {
        super();
    }

    async main(args: string[]) {

        for (const item of this.fs.currentDirectory.children)
            this.frame.write(item.name + '\t\t');

        if (this.fs.currentDirectory.children.length)
            this.frame.writeLine();
    }
}