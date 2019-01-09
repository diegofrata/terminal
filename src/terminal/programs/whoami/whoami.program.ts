import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "../program";
import { ImgComponent } from "src/terminal/core/img.component";

@Injectable()
@Program({
    alias: 'whoami',
    description: 'Tells you more about the Creator.'
})
export class WhoAmIProgram extends ProgramBase {

    async main() {
        const loadingFrame = await this.frame.createFrame();
        loadingFrame.writeLine('Loading... Please wait.');

        await new Promise(r => {
            this.frame.append(ImgComponent, async ref => {
                ref.instance.src = './assets/whoami.svg'
                ref.instance.style = {
                    'width': '100%',
                    'max-width': '100%',
                    'height': 'calc(100vh - 48px)',
                }
                await ref.instance.loaded.toPromise();
                loadingFrame.clear();
                r();
            });
        });

        this.frame.writeLine();
    }
}

