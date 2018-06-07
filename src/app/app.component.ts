import { Component } from '@angular/core';
import { LogService } from './log.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'My First Angular App!';

  constructor(
    private logger: LogService
  ) {
  	this.logger.log("hello world 123");
  }
}
