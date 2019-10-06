import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Matrix } from './matrix.model';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
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
    let c;
    try {
      this.ping();
      c = true;
    } catch (error) {
      c = false;
    }
    return c;
  }

  public ping(): Observable<Matrix> {
    const testUrl = `${this.generalURL}`;
    return this.http.get<Matrix>(testUrl);
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
