import { Component, OnInit } from '@angular/core';
import { DebtService } from '../../services/debt.service';

@Component({
  selector: 'app-debt-list',
  templateUrl: './debt-list.component.html',
  styleUrls: ['./debt-list.component.css']
})
export class DebtListComponent implements OnInit {

  public debts: any;

  constructor(private debtService: DebtService) { }

  ngOnInit(): void { 
    this.getDebts();
  }

  async getDebts() {
    await this.debtService.list().subscribe(data => {
      this.debts = data;
    });
  }

  onEdit(debt: Object) {
    console.log(debt);
  }

  async onDelete(id: number) {
    if(confirm('Você deseja excluir esta dívida?')) {
      await this.debtService.delete(id).subscribe(result => {
        alert('Deletado com sucesso!');
      });
    }
  }

  refreshList() {

  }

}
