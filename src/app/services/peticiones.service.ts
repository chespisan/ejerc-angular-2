import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class PeticionesService {
    public url: string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = 'https://reqres.in/';
    }

    getUser(): Observable {
        this._http.get(this.url + 'api/users/2');
    }
}