import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'demo1';
  url = 'https://angular.io/tutorial';
keyword = '';

  constructor() {
    // setTimeout(() => {
    //   this.title = 'Ming Is Very Big';
    // }, 2000);
  }

  ChangeTitle(altKey:  boolean ) {
    if (altKey) {
      this.title = 'Ming Is Very Big';
    }

   // console.log($event);
  }

  keywordReset(){
    this.keyword = '';
  }
}
