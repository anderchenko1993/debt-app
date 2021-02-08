import { Component, OnInit } from '@angular/core';

import { UserService } from './../services/user.service';
import { DebtService } from './../services/debt.service';
import { Debt } from './../models/debt.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  users: any;
  debt: Debt;

  constructor(private userService: UserService, private debtService: DebtService) { 
    this.debt = {
      _id: null,
      id_usuario: '',
      motivo: '',
      data: '',
      valor: '', 
    };
  }

  ngOnInit(): void { 
    this.getUsers() 
  }

  async getUsers() {
    await this.userService.getUsers().subscribe(data => {
      this.users = data;
    });
  }

  resetForm(form: NgForm) {
    form.resetForm();
  }

  onSubmit() {
    console.log(this.debt);
    // this.debtService.save(this.debt);
  }

}
