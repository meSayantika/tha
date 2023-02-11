import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class TestserviceService {

constructor(private http:HttpClient,private msg:MessageService) { }
public getPosts(){
  this.msg.globalInfo('this is a text info')
  return this.http.get('https://jsonplaceholder.typicode.com/posts');

}

}
