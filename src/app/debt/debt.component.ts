import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  users: any;

  constructor(private userService: UserService) { }

  ngOnInit(): void { 
    this.getUsers() 
  }

  async getUsers() {
    await this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

}
