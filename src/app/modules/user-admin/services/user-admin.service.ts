import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { solutionList} from '../solutionlist';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {
  private _controller = `${environment.serverUrl}`;
  //https://staging.890enterprise.business/auth/assignRoleToUser

  constructor(private _http: HttpClient) { }
  public getUsers(): Observable<any> {
    return this._http.get<any>(`${this._controller}userMgmt/api/users`);
  }
  // public getSolutionAccess(query?:string): Observable<any> {
  //  // return this._http.get<any>(this._controller);
  // }
  public getSolutionAccess(query?:string){
    console.log(query)
    return solutionList[0].data
   // return this._http.get<any>(`${this._controller}/auth/getAllScopesRelatedToUser?${query}`);
  }
  public provideSolutionAccess(query?:object): Observable<any> {
    return this._http.post<any>(`${this._controller}auth/assignRoleToUser`,{query});
  }
  public removeSolutionAccess(query?:object): Observable<any> {
    return this._http.post<any>(`${this._controller}auth/removeRoleToUser`,{query});
  }
}
