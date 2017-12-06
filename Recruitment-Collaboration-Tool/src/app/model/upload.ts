export class Upload {
    $key: string;
    file: File;
    name: string;
    url: string;
    progress: number;
    createdAt: Date = new Date();
    constructor(file: File) {
        this.file = file;
    }
}
export interface File1 {
    lastModifiedDate: any;
    name: string;
    webkitRelativePath: string;
}