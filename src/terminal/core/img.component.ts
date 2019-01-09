import { Component, Input, ElementRef, ViewChild, AfterViewInit, Output, EventEmitter } from '@angular/core';
@Component({
    selector: 'terminal-img',
    template: '<img #img [attr.src]="src" [ngStyle]="style">',
})
export class ImgComponent implements AfterViewInit {
    @ViewChild('img') img;
    @Input() src = '';
    @Input() style = {};

    @Output() loaded = new EventEmitter();

    ngAfterViewInit(): void {
        this.img.nativeElement.onload = () => {
            this.loaded.emit();
            this.loaded.complete();
        };
    }
}