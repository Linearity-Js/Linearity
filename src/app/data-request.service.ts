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
  private host = 'localhost';
  private port = '8080';
  private linearityBack = 'linearity-underground/resources/undergroundStation';
  private message;
  private generalURL = `${this.protocol}://${this.host}:${this.port}/${this.linearityBack}`;
  private GaussURL;
  private offlineMessage = `Can’t access. Problems with the server. Check ur connection`;
  private onlineMessage = `The back is online`;

  data = { tipo: '' };
  v: any;

  constructor(private http: HttpClient) {
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

  
  public getGauss(matrix: JSON): Observable<Matrix> {
    this.GaussURL = `${this.generalURL}/getGauss`;
    return this.http.post<Matrix>(this.GaussURL, matrix);
  }

  public getGaussJordan(matrix: JSON): Observable<Matrix> {
    this.GaussURL = `${this.generalURL}/getGaussJordan`;
    return this.http.post<Matrix>(this.GaussURL, matrix);
  }
}
