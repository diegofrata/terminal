import { ViewContainerRef, Directive } from "@angular/core";

@Directive({
    selector: '[terminal-frame-content]',
})
export class FrameContentDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
