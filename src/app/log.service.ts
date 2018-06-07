import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  public logs: String[] = [];
  constructor(
    private http: HttpClient
  ) { }
  
  log(str: string) {
    console.log(str);
    console.log(this.logs)
    this.logs.push(str);
    // this.http.post('http://localhost:3000/log', str).subscribe();
  }

//   (function(){
//     var oldLog = console.log;
//     console.log = function (message) {
//         alert("message")
//         oldLog.apply(console, arguments);
//     };
// })();
}
