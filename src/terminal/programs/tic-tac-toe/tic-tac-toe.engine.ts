import { countBy } from "lodash";

export type PlayerSelection = 'x' | 'o';

export function isSelection(x): x is PlayerSelection {
    return x === 'x' || x === 'o';
}

export type Cursor = { col: number, row: number };

export class TicTacToeEngine {
    selection: PlayerSelection
    grid: (PlayerSelection | null)[][];
    winner: PlayerSelection | null;
    turn: PlayerSelection;
    cursor: Cursor
    freeSpaces: number;

    constructor(selection: PlayerSelection, spaces: number) {
        this.selection = selection;
        this.freeSpaces = spaces * spaces;
        this.turn = 'x';
        this.cursor = { col: 0, row: 0 };

        this.grid = [];
        for (let y = 0; y < spaces; y++) {
            this.grid.push([]);
            for (let x = 0; x < spaces; x++) {
                this.grid[y].push(null);
            }
        }
    }

    get isPlayerTurn() {
        return this.turn === this.selection;
    }

    get hasPlayerWon() {
        return this.winner === this.selection;
    }

    get completed() {
        return this.freeSpaces === 0 || this.winner != null;
    }

    play() {
        if (this.completed) return;

        this.freeSpaces -= 1;
        this.grid[this.cursor.row][this.cursor.col] = this.turn;
        this.turn = this.turn === 'x' ? 'o' : 'x';
        this.winner = this.findWinner();
        if (!this.completed) {
            this.moveRight();
        }
    }

    private * selectCols(row) {
        for (let col = 0; col < this.grid.length; col++)
            yield { row: row, col: col } as Cursor;
    }

    private * selectRows(col) {
        for (let row = 0; row < this.grid.length; row++)
            yield { row: row, col: col } as Cursor;
    }

    private * selectDownwardDiagonal() {
        for (let x = 0; x < this.grid.length; x++)
            yield { row: x, col: x } as Cursor;
    }

    private * selectUpwardDiagonal() {
        for (let x = 0; x < this.grid.length; x++)
            yield { row: this.grid.length - 1 - x, col: x } as Cursor;
    }

    private findWinnerInSequence(iterable: IterableIterator<Cursor>) {
        const selections = Array.from(iterable).map(x => this.grid[x.row][x.col]);
        const count = countBy(selections, x => x);

        if (count.x && count.x === this.grid.length)
            return 'x';

        if (count.o && count.o === this.grid.length)
            return 'o';

        return null;
    }

    private findWinner() {
        for (let row = 0; row < this.grid.length; row++) {
            const winner = this.findWinnerInSequence(this.selectCols(row));
            if (isSelection(winner)) return winner;
        }

        for (let col = 0; col < this.grid.length; col++) {
            const winner = this.findWinnerInSequence(this.selectRows(col));
            if (isSelection(winner)) return winner;
        }

        let winner = this.findWinnerInSequence(this.selectUpwardDiagonal());
        if (isSelection(winner)) return winner;
        
        winner = this.findWinnerInSequence(this.selectDownwardDiagonal());
        if (isSelection(winner)) return winner;

        return null;
    }

    moveLeft() {
        this.moveUntilFree(c => {
            c.col -= 1;
            if (c.col < 0) {
                c.col = this.grid[0].length - 1;
                c.row -= 1;
                if (c.row < 0) c.row = this.grid.length - 1;
            }
        });
    }

    moveRight() {
        this.moveUntilFree(c => {
            c.col += 1;
            if (c.col >= this.grid[0].length) {
                c.col = 0;
                c.row += 1;
                if (c.row >= this.grid.length) c.row = 0;
            }
        });
    }

    moveUp() {
        this.moveUntilFree(c => {
            c.row -= 1;
            if (c.row < 0) {
                c.row = this.grid.length - 1;
                c.col -= 1;
                if (c.col < 0) c.col = this.grid[0].length - 1;
            }
        });
    }

    moveDown() {
        this.moveUntilFree(c => {
            c.row += 1;
            if (c.row >= this.grid.length) {
                c.row = 0;
                c.col += 1;
                if (c.col >= this.grid[0].length) c.col = 0;
            }
        });
    }

    moveRandomly() {
        if (this.completed) return;

        let row, col;
        do {
            row = Math.floor(Math.random() * this.grid.length);
            col = Math.floor(Math.random() * this.grid.length);
        } while (!this.moveTo({ row: row, col: col }) && !this.completed);
    }

    private moveTo(cursor: Cursor) {
        if (this.completed) return false;

        if (this.isFree(cursor)) {
            this.cursor = cursor;
            return true;
        }

        return false;
    }

    private moveUntilFree(fn: ((cursor: Cursor) => void)) {
        if (this.completed) return;

        do {
            fn(this.cursor);
        } while (!this.isFree(this.cursor));
    }

    private isFree(cursor: Cursor) {
        return this.grid[cursor.row][cursor.col] === null;
    }
}
