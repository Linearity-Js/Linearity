import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DataRegisterService {

    data = { tipo: '' };
    v: any;

    // Observable string source
    private dataStringSource = new BehaviorSubject<string>(this.v);

    // Observable string stream
    dataString$ = this.dataStringSource.asObservable();

    constructor() { }

    public saveData(value) {
        // console.log("save data function called " + value + this.data.tipo);
        this.data.tipo = value;
        this.dataStringSource.next(this.data.tipo);
    }
}
