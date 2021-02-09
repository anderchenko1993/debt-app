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

  public users: any;
  public debt: Debt;

  constructor(private userService: UserService, private debtService: DebtService) { 
    this.debt = {
      _id: null,
      usuario: { id: '', name: '' },
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

  onSubmit() {
    const { id, name } = this.users.find((user: any) => user.id == this.debt.usuario.id);
    
    this.debt.usuario = { id, name };

    this.debtService.save(this.debt).subscribe(result => {
      alert('Cadastrado com sucesso!');
    });
  }

}
