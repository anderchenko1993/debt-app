import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DatePipe } from '@angular/common';

import { UserService } from './../services/user.service';
import { DebtService } from './../services/debt.service';
import { Debt } from './../models/debt.model';

@Component({
  selector: 'app-debt',
  templateUrl: './debt.component.html',
  styleUrls: ['./debt.component.css']
})
export class DebtComponent implements OnInit {

  title: string;
  users: any;
  debt: Debt;

  constructor(
    private userService: UserService, 
    private debtService: DebtService, 
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private datePipe: DatePipe) {

    this.title = "Cadastrar dívida";

    this.debt = {
      _id: null,
      usuario: { id: '', name: '' },
      motivo: '',
      data: '',
      valor: '', 
    } ;
  }

  ngOnInit(): void {  
    this.activatedRoute.params.subscribe(params => {
      this.getDebt(params['id']);
      this.title = "Editar dívida";     
    });
    
    this.getUsers();
  }

  async getUsers() {
    await this.userService.getUsers().subscribe(data => {
      this.users = data;
    }, error => {
      alert(error.message);
    });
  }

  async getDebt(id: number) {
    await this.debtService.getDebt(id).subscribe(data => {
      this.debt = data;
      this.debt.data = this.datePipe.transform(this.debt.data, 'yyyy-MM-dd', 'UTC');      
    }, error => {
      alert(error.message);
    });
  }

  async onSubmit() {
    const { id, name } = this.users.find((user: any) => user.id == this.debt.usuario.id);
    
    this.debt.usuario = { id, name };

    if(!this.debt._id) {
      await this.debtService.saveDebt(this.debt).subscribe(result => {
        alert('Cadastrado com sucesso!');

        if(confirm('Deseja cadastrar uma nova dívida?')) 
          location.reload();
        else 
          this.router.navigate(['']);
      });
    }
    else {
      await this.debtService.updateDebt(this.debt).subscribe(result => {
        alert('Atualizado com sucesso!');
        this.router.navigate(['']);
      });
    }
  }

}
