import { FrameComponent } from "../core/frame.component";
import { Type } from "@angular/core";

export let PROGRAMS: { [alias: string]: { target: string, description: string } } = {};

export function Program<T>(definition: { alias: string, description: string }): any {
    return function (target) {
        PROGRAMS[definition.alias] = { target: target.name, description: definition.description };
    }
}

export function makeProgramProvider<T>(type: Type<T>) {
    return [type, { provide: type.name, useExisting: type }];
}

export abstract class ProgramBase {
    protected frame: FrameComponent;

    async run(frame: FrameComponent, args: string[]) {
        this.frame = frame;
        await this.main(args);
    }

    abstract async main(args: string[]): Promise<void>;
}