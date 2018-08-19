import { Injectable } from "@angular/core";
import { Program, Alias } from "./program";
import { FileSystemService } from "../core/file-system.service";

@Injectable()
@Alias('mkdir')
export class MakeDirectoryProgram extends Program {

    constructor(private fs: FileSystemService) {
        super();
    }

    async main(args: string[]) {
        this.fs.createDirectory(args[0]);
    }
}