import { LineBreakComponent } from './line-break.component';
import { TextComponent } from './text.component';
import { Component, ComponentFactoryResolver, Type, ComponentRef, ViewChild, EventEmitter, AfterViewInit } from '@angular/core';
import { InputComponent } from './input.component';
import { FrameContentDirective } from './frame-content.directive';

@Component({
    selector: 'terminal-frame',
    template: '<ng-template terminal-frame-content></ng-template>'
})
export class FrameComponent implements AfterViewInit {
    protected index = 0;
    protected initialized = new EventEmitter();

    @ViewChild(FrameContentDirective) content: FrameContentDirective;

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
    }

    write(text: string) {
        this.append(TextComponent, ref => ref.instance.text = text);
    }

    writeLine(text?: string) {
        this.write(text ? text : '');
        this.append(LineBreakComponent);
    }

    readLine(secret?: boolean): Promise<string> {
        let promise;
        this.append(InputComponent, c => {
            if (secret) c.instance.secret = true;
            promise = c.instance.line.asObservable().toPromise()
        });
        return promise;
    }

    async createFrame(): Promise<FrameComponent> {
        await this.initialized.asObservable().toPromise();
        let instance;
        this.append(FrameComponent, c => instance = c.instance);
        return instance;
    }

    protected createComponent<T>(type: Type<T>, index?: number) {
        const componentFactory = this.componentFactoryResolver.resolveComponentFactory(type);
        return this.content.viewContainerRef.createComponent(componentFactory, index);
    }
}

