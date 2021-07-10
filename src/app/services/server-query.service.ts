import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Servers} from "../../types";

@Injectable({
  providedIn: 'root'
})
export class ServerQueryService {

  constructor(private http: HttpClient) {
  }

  query(address: string | string[]) {
    if (!Array.isArray(address)) {
      address = [address];
    }

    return this.http.get<Servers>(environment.api, {
      params: {address},
    });
  }
}
