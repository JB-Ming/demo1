import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-article-body',
  templateUrl: './article-body.component.html',
  styleUrls: ['./article-body.component.scss']
})
export class ArticleBodyComponent implements OnInit {

  @Input()
  item:any;

  constructor() { }

  ngOnInit(): void {
  }

}
