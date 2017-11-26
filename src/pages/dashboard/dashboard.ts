import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {  Http, Headers } from "@angular/http";
/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  username:string;
  details:any;
  constructor(private http:Http,public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    console.log(this.username);
    this.getDetails();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  getDetails(){
    let body: string = "type=get&username=" + this.username,
      content_type: string = "application/x-www-form-urlencoded",
      header: Headers = new Headers({ 'content-type': content_type });

    this.http.post('http://localhost:80/api/auth.php', body, { headers: header })
      .subscribe(data => {
        this.details=data.json();
      });
  }

}
