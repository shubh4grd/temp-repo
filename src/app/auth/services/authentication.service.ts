import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject } from 'rxjs';
import { apiUrlConstants } from 'src/app/shared/constants/api-url';
import { LoginInputModel, User } from 'src/app/shared/interface/user.model';
import { LocalStorageEncryptService } from 'src/app/shared/services/local-storage-encrypt.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constants: any = apiUrlConstants;

  private currentUserSubject: BehaviorSubject<User>;
  private themeSubject = new Subject<any>();
  public currentUser: Observable<User>;
  constructor(private http: HttpClient,private localStore: LocalStorageEncryptService) {
    
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser') || null as any));
    this.currentUser = this.currentUserSubject.asObservable();
   } 


   login(modelInputLogin: LoginInputModel): Observable<any> {
    return this.http.post(this.constants.apiUrls.loginUrl, modelInputLogin)
        .pipe(map((response: any) => {
            // login successful if there's a jwt token in the response
            const token = response && response.data?.token;
            if (token) {
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(response.data));
                this.currentUserSubject.next(response.data);
                // return true to indicate successful login
                return response.data;
            }
        }));
}

}
