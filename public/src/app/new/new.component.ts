import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  author: any;

  constructor(private _httpService: HttpService, private router: Router) { }

  ngOnInit() {
    this.author = {name: ""}
  }
  newAuthor(){
    let observable = this._httpService.makeNewAuthor(this.author)
    observable.subscribe((data: any) => {
      if(data.message === "error"){
        console.log("Error!!!")
      }
      if(data.message === "success"){
        console.log("We made a new author", data.result)
      }
    })
    this.author = {name: ""}
    this.router.navigate(['']);
  }
}
