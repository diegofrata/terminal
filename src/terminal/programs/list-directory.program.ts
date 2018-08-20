import { Injectable } from "@angular/core";
import { Program, Alias } from "./program";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Alias('ls')
export class ListDirectoryProgram extends Program {

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