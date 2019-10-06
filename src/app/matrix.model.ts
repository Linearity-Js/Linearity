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

    setMessage(message: string) {
        this.message = message;
    }

    setStatus(status: number){
        this.status = status;
    }

    getStatus(){
        return this.status;
    }
}
