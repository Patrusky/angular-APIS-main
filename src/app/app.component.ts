import { Component } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { AuthService } from './services/auth.service';
import { UsersService } from './services/users.service';
import { User } from './models/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = '';
  showImg = true;
  token = '';
  profile: User = {
    id: '',
    username:'',
    email: '',
    password: '',
    name: {
      firstname: '',
      lastname: '',
    },
    address:{
      city: '',
      street: '',
      number: 0,
      zipcode: '',
      geolocation:{
          lat: '',
          long: '',
        }
    },
    phone: '',
  }

  constructor(
    private authService: AuthService,
    private usersService: UsersService,
  ){

  }

  onLoaded(img: string) {
    console.log('log padre', img);
  }

  toggleImg() {
    this.showImg = !this.showImg;
  }

  createUser(){
    this.usersService.create({
      email:'John@gmail.com',
      username:'johnd',
      password:'m38rmF$',
      name:{
          firstname:'John',
          lastname:'Doe',
    },
      address:{
          city:'kilcoole',
          street:'7835 new road',
          number:3,
          zipcode:'12926-3874',
          geolocation:{
              lat:'-37.3159',
              long:'81.1496'
          }
      },
      phone:'1-570-236-7033'
    })
    .subscribe(rta => {
      console.log(rta)
    })
  }

  login(){
    this.authService.login('johnd', 'm38rmF$')
    /*.pipe(
      switchMap((token) => {
        this.token = token.access_token;
        return this.authService.profile(token.access_token);
      })
    )
    .subscribe(user => {
      console.log('login');
      this.profile = user;
    })*/
     .subscribe(rta => {
      this.token = rta.access_token;
      console.log(rta.access_token);
    })
  }



  getProfile(){
    this.authService.profile(this.token)
    .subscribe(profile => {
      console.log(profile);
    });
  }


}
