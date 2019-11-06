export class Matrix {

    private status: number;
    public message: string;
    public name: string;
    public matrix: number[][];

    // tslint:disable-next-line:max-line-length
    constructor(status: number, name: string, matrix: any) {
        this.status = status;
        this.name = name;
        this.matrix = matrix;
    }

    public setMessage(message: string) {
        this.message = message;
    }

    public setStatus(status: number) {
        this.status = status;
    }

    public getStatus() {
        return this.status;
    }

    public getMatrixRows(): number {
        try {
            return this.matrix.length;
        } catch (error) {
            return 0;
        }
    }

    public getMatrixCols(): number {
        try {
            return this.matrix[0].length;
        } catch (error) {
            return 0;
        }
    }
}
