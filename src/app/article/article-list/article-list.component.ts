import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor() {

  }

  doDelete(item :any){
   this.data =  this.data.filter((v)=>{
      return v !== item;
    })
  }

  changedName($event:any){}



  ngOnInit(): void {
  }

  data:Array<any> = [
    {
      "id" : 1,
      "name" : "ming1",
      "dept" : "資訊部1"
    },
    {
      "id" : 2,
      "name" : "ming2",
      "dept" : "資訊部2"
    },
    {
      "id" : 3,
      "name" : "ming3",
      "dept" : "資訊部3"
    },
    {
      "id" : 4,
      "name" : "ming4",
      "dept" : "資訊部4"
    }
  ]
}
