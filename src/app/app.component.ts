import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Angular' + VERSION.major;
  title = 'angular100day';

  inputType = 'text';

  user = {
    name:'Huy Tran',
    age: 22
  };

  handler(event) {
    console.log("Click !", event);
  }
}
