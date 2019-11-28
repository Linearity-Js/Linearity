import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Matrix } from './matrix.model';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
  private online = false;
  private protocol = 'http';
  private dev_host = 'localhost';
  private prd_host = `linearity-metro.herokuapp.com`;

 
  private dev_port = '8080';
  private linearityBack = '/Linearity-Underground/resources/undergroundStation';
  
  private message;
  private dev_URL = `${this.protocol}://${this.dev_host}:${this.dev_port}${this.linearityBack}`;
  private prd_URL = `${this.protocol}://${this.prd_host}${this.linearityBack}`;
  private URL;
  private offlineMessage = `Can’t access. Problems with the server. Check ur connection`;
  private onlineMessage = `The back is online`;
  private generalURL;

  data = { tipo: '' };
  v: any;

  constructor(private http: HttpClient) {
    this.generalURL = this.dev_URL;
    this.isOnline();
    console.log(this.message);
  }

  public isOnline(): boolean {
    this.ping();
    const response = this.testService();
    if (response) {
      this.message = this.onlineMessage;
    } else {
      this.message = this.offlineMessage;
    }
    return response;
  }

  public getMessage(): string {
    return this.message;
  }

  private testService(): boolean {
    this.ping();
    return (this.online);
  }

  public ping(): void {
    const testUrl = `${this.generalURL}`;

    this.http.get(testUrl, { observe: 'response' }).subscribe(response => {
      this.setOnline();
    }, (err: HttpErrorResponse) => {
      // console.error(`Backend returned code ${err.status}, body was: ${err.error}`);
      this.setOffline();
    }
    );
  }

  private setOnline(){
    this.online = true;
  }

  private setOffline(){
    this.online = false;
  }

  public getTransposed(matrix: JSON): Observable<Matrix> {
    this.URL = `${this.generalURL}/getTransposeMatrix`;
    return this.http.post<Matrix>(this.URL, matrix);
  }
  
  public getGauss(matrix: JSON): Observable<Matrix> {
    this.URL = `${this.generalURL}/getGauss`;
    return this.http.post<Matrix>(this.URL, matrix);
  }

  public getGaussJordan(matrix: JSON): Observable<Matrix> {
    this.URL = `${this.generalURL}/getGaussJordan`;
    return this.http.post<Matrix>(this.URL, matrix);
  }

  public getInverse(matrix: JSON): Observable<Matrix> {
    this.URL = `${this.generalURL}/getInverse`;
    return this.http.post<Matrix>(this.URL, matrix);
  }

  public getDeterminant(matrix: JSON): Observable<Matrix> {
    this.URL = `${this.generalURL}/getDeterminant`;
    return this.http.post<Matrix>(this.URL, matrix);
  }
}
