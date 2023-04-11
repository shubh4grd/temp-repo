import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageEncryptService } from 'src/app/shared/services/local-storage-encrypt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  loader : boolean = false
  logIn!: string;
  hide = true;
  hideRequiredMarker = true;

  constructor( private localStore: LocalStorageEncryptService, private router : Router) { }

  form = new FormGroup({    
    name: new FormControl(""),
    email: new FormControl(""),
    phone: new FormControl(""),
    address: new FormControl(""),
    unit_number: new FormControl(""),
    password: new FormControl("")
  })

  ngOnInit(): void {
  }

  openComponent(component: string) {
    this.router.navigate(["/" + component]);
  }

}
