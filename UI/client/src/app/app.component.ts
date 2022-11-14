<<<<<<< HEAD
import { Component, OnInit} from '@angular/core';
=======
import { Component, OnInit } from '@angular/core';
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
<<<<<<< HEAD
  title = 'The Dating App';
  users: any;

  constructor(private http: HttpClient){}
  ngOnInit(){
=======
  title = 'client';

  constructor(private http: HttpClient){}

  ngOnInit()
  {
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
    this.getUsers();
  }

  getUsers()
  {
<<<<<<< HEAD
    this.http.get('https://localhost:5000/api/Users').subscribe(
      response => {
        this.users = response;
    }, error =>{
=======
    this.http.get('https://localhost:5001/api/users').subscribe(response => {
      this.users = response;
    },error => {
>>>>>>> b7717e4d86aefe391324728f3ab640a87d975fc1
      console.log(error);
    })
  }
}
