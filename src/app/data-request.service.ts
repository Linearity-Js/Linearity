import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataRequestService {
  private protocol = 'http';
  private host = 'localhost';
  private port = '8080';
  private linearityBack = 'linearity-underground/resources/undergroundStation';

  private generalURL = `${this.protocol}://${this.host}:${this.port}/${this.linearityBack}`;
  private GaussURL;

  data = { tipo: '' };
  v: any;

  constructor(private http: HttpClient) {

    const testUrl = `${this.generalURL}`;

    fetch(testUrl)
      .then(response => response.text())
      .then(contents => console.log(`the back is online`))
      .catch(() => console.log(`Can’t access  ${testUrl} response. Blocked by browser?`));
  }

  public getGauss(matrix: JSON): Observable<object> {
    console.log('init post request');
    this.GaussURL = `${this.generalURL}/getGauss`;
    console.log(this.GaussURL);
    return this.http.post<any>(this.GaussURL, matrix);
  }
}
