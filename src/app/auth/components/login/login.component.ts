import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  loader : boolean = false
  logIn!: string;
  hide = true;
  hideRequiredMarker = true;

  constructor( private router : Router) { }

  form = new FormGroup({    
    email: new FormControl(""),
    password: new FormControl(""),    
    checkBox: new FormControl("")
  })

  ngOnInit(): void {
  }
  

  openComponent(component: string) {
    this.router.navigate(["/" + component]);
  }

  signIn() {
  throw new Error('Method not implemented.');
  }

}
