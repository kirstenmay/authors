import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }
  getAllAuthors(){
    return this._http.get('/api/authors');
  }
  getOneAuthor(id){
    return this._http.get(`/api/authors/${id}`)
  }
  makeNewAuthor(newAuthor){
    return this._http.post('/api/authors/new', newAuthor);
  }
  editAuthor(id, oneAuthor){
    return this._http.put(`/api/authors/${id}/edit`, oneAuthor);
  }
  removeAuthor(id){
    return this._http.delete(`/api/authors/${id}/delete`);
  }
}
