import { FrameComponent } from "../core/frame.component";
import { Type } from "@angular/core";

export const PROGRAMS: { [alias: string]: string } = {};

export function Alias<T>(alias: string): any {
    return function (target) {
        PROGRAMS[alias] = target.name;
    }
}

export function makeProgramProvider<T>(type: Type<T>) {
    return [type, {provide: type.name, useExisting: type}];
}

export class Program {
    protected frame: FrameComponent;

    async run(frame: FrameComponent) {
        this.frame = frame;
        await this.main();
    }

    async main(): Promise<void> {
    }
}