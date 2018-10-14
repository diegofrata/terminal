import { Injectable } from "@angular/core";
import { ProgramBase, Program } from "../program";
import { Color } from "../../core/color";
import { FrameComponent } from "../../core/frame.component";
import { sleeper } from "../../core/util";
import { TicTacToeEngine, PlayerSelection, isSelection } from './tic-tac-toe.engine';

@Injectable()
@Program({
    alias: 'tic-tac-toe',
    description: 'Tic-tac-toe is a paper-and-pencil game for two players, X and O.'
})
export class TicTacToeProgram extends ProgramBase {
    gameFrame: FrameComponent;
    game: TicTacToeEngine;

    async main() {
        this.frame.writeLine('Welcome to Tic-tac-toe v1.0!');
        const selection = await this.decideSelection();
        console.log(selection);

        this.game = new TicTacToeEngine(selection, 3);
        this.gameFrame = await this.frame.createFrame();

        while (!this.game.completed) {
            await this.play();
        }

        this.gameFrame.write('Result: ');
        if (this.game.winner == null) {
            this.gameFrame.writeLine('Tie.');
        } else if (this.game.hasPlayerWon) {
            this.gameFrame.writeLine('You win!', Color.BrightGreen);
        } else {
            this.gameFrame.writeLine('Computer wins!', Color.Cyan);
        }

    }

    async decideSelection(): Promise<PlayerSelection> {
        this.frame.write('Please select (X) or (O): ');
        const selection = (await this.frame.readLine()).toLocaleLowerCase();
        this.frame.writeLine();

        if (isSelection(selection))
            return selection;

        this.frame.writeLine('Invalid selection.', Color.Red);

        return await this.decideSelection();
    }

    async play() {
        if (this.game.isPlayerTurn)
            await this.playHuman();
        else
            await this.playMachine();

        this.game.play();
        this.render();
    }

    async playHuman() {
        const renderHuman = () => {
            this.render();
            this.gameFrame.write('Make your move!');
        };

        renderHuman();

        let key;
        while (true) {
            key = await this.gameFrame.readKey();
            switch (key) {
                case 'ArrowLeft':
                    this.game.moveLeft();
                    break;
                case 'ArrowRight':
                    this.game.moveRight();
                    break;
                case 'ArrowUp':
                    this.game.moveUp();
                    break;
                case 'ArrowDown':
                    this.game.moveDown();
                    break;
                case 'Enter':
                    return;
                default:
                    continue;
            }

            renderHuman();
        }
    }

    async playMachine() {
        this.render();
        this.gameFrame.write('Computer is thinking...', Color.Yellow);

        this.game.moveRandomly();

        await sleeper(500);
    }

    render() {
        this.gameFrame.clear();

        for (let y = 0; y < this.game.grid.length; y++) {
            const row = this.game.grid[y];

            if (y > 0)
                this.gameFrame.writeLine(row.map(() => '---').join('|'));

            this.gameFrame.writeLine(row.map((a, x) => {

                if (this.game.cursor.row === y && this.game.cursor.col === x && this.game.isPlayerTurn && !this.game.completed) {
                    return `[${this.game.turn.toUpperCase()}]`;
                } else return ` ${a ? a.toUpperCase() : ' '} `;
            }).join('|'))
        }
    }
}