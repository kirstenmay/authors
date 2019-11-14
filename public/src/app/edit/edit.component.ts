import { Component, OnInit } from '@angular/core';
import {HttpService} from '../http.service';
import { ActivatedRoute } from "@angular/router";
import { RouterModule, Routes, Router } from '@angular/router';


@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  oneAuthor: any;
  authorId: any;
  constructor(private _httpService: HttpService, private route: ActivatedRoute,  private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.authorId = params.get("id")
    })
    this.getAuthor(this.authorId);
  }

  getAuthor(id){
    let observable = this._httpService.getOneAuthor(id)
    observable.subscribe((data: any) => {
      if(data.message === "success"){
        console.log("We got an author", data.result)
        this.oneAuthor = data.result;
      }
    })
  }
  editAuthor(){
    let observable = this._httpService.editAuthor(this.authorId , this.oneAuthor)
    observable.subscribe((data: any) => {
      if(data.message === "success"){
        console.log("We editied an author", data.result)
      }
    })
    this.router.navigate(['']);
  }
}
