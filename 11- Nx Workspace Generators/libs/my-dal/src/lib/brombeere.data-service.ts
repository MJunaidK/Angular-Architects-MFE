import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Brombeere } from './brombeere';

@Injectable({ providedIn: 'root' })
export class BrombeereDataService {
  constructor(private http: HttpClient) {}

  load(): Observable<Brombeere[]> {
    // Uncomment if needed
    /*
        const url = '...';
        const params = new HttpParams().set('param', 'value');
        const headers = new HttpHeaders().set('Accept', 'application/json');
        return this.http.get<Brombeere[]>(url, {params, headers});
        */

    return of([
      {
        id: 1,
        title: 'Lorem ipsum',
        description: 'Lorem ipsum dolor sit amet',
      },
      {
        id: 2,
        title: 'At vero eos',
        description: 'At vero eos et accusam et justo duo dolores',
      },
      {
        id: 3,
        title: 'Duis autem',
        description: 'Duis autem vel eum iriure dolor in hendrerit',
      },
    ]);
  }
}
