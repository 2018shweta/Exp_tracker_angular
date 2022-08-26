import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  constructor(private http:HttpClient) {}
    signupApi(user:any):Observable<any>{
     return  this.http.post("http://localhost:9595/publicApi/adduser",user)
    }
   loginApi(user:any):Observable<any>{
    return this.http.post("http://localhost:9595/publicApi/login",user)
   }
}
