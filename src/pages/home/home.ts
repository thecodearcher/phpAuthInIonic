import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Http, Headers } from "@angular/http";

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  type:string='login';
  name:string='';
  username:string='';
  password:string='';
  info:string;
  constructor(private http:Http,public navCtrl: NavController) {
   
  }

  signup(){
    let name = this.name;
    let username = this.username;
    let password = this.password;

    let body: string = "type=signup&name=" + name + "&username=" + username +"&password="+password,
      content_type: string = "application/x-www-form-urlencoded",
      header: Headers = new Headers({ 'content-type': content_type });
      
    this.http.post('http://localhost:80/api/auth.php', body, { headers: header })
    .subscribe(data=>{
      this.info = data.text();
      console.log(data)
    });
  }
  login(){
    let username = this.username;
    let password = this.password;

    let body: string = "type=login&username=" + username +"&password="+password,
      content_type: string = "application/x-www-form-urlencoded",
      header: Headers = new Headers({ 'content-type': content_type });
      
    this.http.post('http://localhost:80/api/auth.php', body, { headers: header })
    .subscribe(data=>{
      this.info = data.text();
      if(this.info=='login'){
        this.navCtrl.setRoot("DashboardPage",{username:username});
      }
      console.log(data)
    });
  }

  switchType(){
    if(this.type=='login'){
      this.type='signup';
    }else{
      this.type='login';
    }
  }
}
