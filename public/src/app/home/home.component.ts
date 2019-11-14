import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  allAuthors: any;
  constructor(private _httpService: HttpService) { }

  ngOnInit() {
    this.getAllAuthors();
    this.allAuthors = []
  }
  getAllAuthors(){
    let observable = this._httpService.getAllAuthors();
    observable.subscribe((data: any) => {
      if(data.message === 'success'){
        this.allAuthors = data.result;
        console.log(data.result)
      }
    })
  }
  delete(id){
    let observable = this._httpService.removeAuthor(id);
    observable.subscribe((data: any) => {
      console.log("We removed this item", data.result);
    })
    this.getAllAuthors();
  }
}
