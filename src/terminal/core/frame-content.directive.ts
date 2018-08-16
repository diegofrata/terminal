import { ViewContainerRef, Directive } from "@angular/core";

@Directive({
    selector: '[frata-frame-content]',
})
export class FrameContentDirective {
    constructor(public viewContainerRef: ViewContainerRef) { }
}
