import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticateService } from 'src/app/Services/authenticate.service';
import { TokenstorageService } from 'src/app/Services/tokenstorage.service';
import { Authenticate } from '../../Models/Authenticate';
import { Role } from '../../Models/Role';
import { User } from '../../Models/User';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {

  form: any = {};
  user!: User;
  msg = '';
  role!: Role;
  constructor(private authservice: AuthenticateService,
    private tokenstorage: TokenstorageService,
              private router: Router) { }

  ngOnInit(): void {
  }

   authenticat() {

     this.authservice.authenticate(new Authenticate(this.form.username, this.form.password)).subscribe(
       data => {
         localStorage.setItem('Token', data.jwttoken)
         localStorage.setItem('Type', data.type)
         localStorage.setItem('Username', data.username)
         localStorage.setItem('Authorities', data.authorities)
      },
      error => {
      this.msg = 'Username Or password Invalid';
      }
    )
  }

}
