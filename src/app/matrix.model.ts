export class Matrix {

    id: number;
    name: string;
    data: number[][];

    // tslint:disable-next-line:max-line-length
    constructor(id: number, name: string, data: any) {
        this.id = id;
        this.name = name;
        this.data = data;
    }
}
