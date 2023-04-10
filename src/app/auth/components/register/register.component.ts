import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageEncryptService } from 'src/app/shared/services/local-storage-encrypt.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private localStore: LocalStorageEncryptService, private router : Router) { }

  ngOnInit(): void {
  }

  openComponent(component: string) {
    this.router.navigate(["/" + component]);
  }

}
