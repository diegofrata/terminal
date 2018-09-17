import { LineBreakComponent } from './line-break.component';
import { TextComponent } from './text.component';
import { Component, ComponentFactoryResolver, Type, ComponentRef, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { InputComponent } from './input.component';
import { FrameContentDirective } from './frame-content.directive';
import { Color } from './color';
import { DelayScroll, isDelayScroll } from './delay-scroll';

@Component({
    selector: 'terminal-frame',
    template: '<ng-template terminal-frame-content></ng-template>'
})
export class FrameComponent implements AfterViewInit {
    protected index = 0;
    protected initialized = new EventEmitter();

    @ViewChild(FrameContentDirective) content: FrameContentDirective;
    parent: FrameComponent;

    constructor(
        private componentFactoryResolver: ComponentFactoryResolver) {
    }

    ngAfterViewInit() {
        this.initialized.emit();
        this.initialized.complete();
    }

    append<T>(type: Type<T>, callback?: (c: ComponentRef<T>) => void) {
        const compRef = this.createComponent(type, this.index++);
        if (callback) callback(compRef);

        if (isDelayScroll(compRef.instance) && compRef.instance.delayScroll) {
            setTimeout(() => compRef.location.nativeElement.scrollIntoViewIfNeeded(), 0);
        } else {
            compRef.location.nativeElement.scrollIntoViewIfNeeded();
        }
    }

    write(text: string, color?: Color) {
        this.append(TextComponent, ref => {
            ref.instance.text = text;
            ref.instance.color = color;
        });
    }

    writeLine(text?: string, color?: Color) {
        this.write(text ? text : '', color);
        this.append(LineBreakComponent);
    }

    readLine(secret?: boolean): Promise<string> {
        let promise;
        this.append(InputComponent, ref => {
            if (secret) ref.instance.secret = true;
            promise = ref.instance.line.asObservable().toPromise()
        });
        return promise;
    }

    clear() {
        this.content.viewContainerRef.clear();
        this.index = 0;
    }

    async createFrame(): Promise<FrameComponent> {
        await this.initialized.asObservable().toPromise();
        let instance: FrameComponent;
        this.append(FrameComponent, c => {
            c.instance.parent = this;
            instance = c.instance;
        });
        return instance;
    }

    protected createComponent<T>(type: Type<T>, index?: number) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
        return this.content.viewContainerRef.createComponent(componentFactory, index);
    }
}

