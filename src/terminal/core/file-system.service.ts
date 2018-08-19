export class FileSystemEntry {
    constructor(public name: string) { }
}

export class File extends FileSystemEntry {
    constructor(public parent: Directory, name: string) {
        super(name);
    }
}

export class Directory extends FileSystemEntry {
    children: (Directory | File)[] = [];

    constructor(public parent: Directory, name) {
        super(name);
    }

    toPath() {
        let dir = this as Directory;
        let path = '';
        do {
            path = dir.parent ? (path ? `${dir.name}/${path}` : dir.name) : `/${path}`;
            dir = dir.parent;
        } while (dir !== null);
        return path;
    }
}

export class FileSystemService {
    root = new Directory(null, '');
    currentDirectory = this.root;

    createDirectory(name: string, parent?: Directory) {
        const currentDirectory = parent ? parent : this.currentDirectory;
        const dir = new Directory(currentDirectory, name);
        currentDirectory.children.push(dir);
        return dir;
    }

    changeDirectory(path: string) {
        const paths = path.split('/');

        let dir = path[0] == '/' ? this.root : this.currentDirectory;
        for (const item of paths) {
            const match = dir.children.find(x => x.name === item);

            if (match == null)
                throw 'path not found.';

            if (match instanceof Directory === false)
                throw `${path} is not a directory.`

            dir = match as Directory;
        }

        this.currentDirectory = dir;

        return dir;
    }

}