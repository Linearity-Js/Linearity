export class Matrix {

    id: number;
    name: string;
    matrix: number[][];

    // tslint:disable-next-line:max-line-length
    constructor(id: number, name: string, matrix: any) {
        this.id = id;
        this.name = name;
        this.matrix = matrix;
    }
}
