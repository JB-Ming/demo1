import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-article-header',
  templateUrl: './article-header.component.html',
  styleUrls: ['./article-header.component.scss']
})
export class ArticleHeaderComponent implements OnInit {

  @Input()
  item:any;
  @Input()
  idx:any;

  @Output()
  delete = new EventEmitter<any>();

  @Output()
  nameChanged = new EventEmitter<any>();

  isEdit = false;
  newName  = '';

  DeleteArticle(){
    this.delete.emit(this.item);
  }

  constructor() { }

  ngOnInit(): void {
    this.newName = this.item.name;
  }

  doEdit(name : any){
  this.newName = name;
  this.nameChanged.emit(name);
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
