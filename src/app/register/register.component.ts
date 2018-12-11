import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router, ActivatedRoute, Route } from "@angular/router";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

 // emailPattern = "[a-z0-9._%+]@[a-z0-9.-]+\.[a-z]{2,4}$";
  emailPattern = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  //router: any;

  constructor(private router: Router,) { 
    
  }

  ngOnInit() {
  }


  goToApp() {
  
    console.log("here");
     
    this.router.navigate(["dashboard"]);
  }

}
