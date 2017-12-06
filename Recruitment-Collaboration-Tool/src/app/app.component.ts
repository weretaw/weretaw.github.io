import { Component, OnInit } from '@angular/core';
import { DataServiceService } from "./services/data-service.service";
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, ActivatedRoute } from "@angular/router";
import { LoginServiceService } from "./services/login-service.service";
import { AuthService } from "./services/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(public DataService: DataServiceService,
    private LoginService: LoginServiceService,
    private auth: AuthService) { }

  ngOnInit() {
    this.auth.isAuthenticated();
  }


}
