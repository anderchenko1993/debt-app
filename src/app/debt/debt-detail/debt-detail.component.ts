import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DebtService } from './../../services/debt.service';

@Component({
  selector: 'app-debt-detail',
  templateUrl: './debt-detail.component.html',
  styleUrls: ['./debt-detail.component.css']
})
export class DebtDetailComponent implements OnInit {

  public debt: any;

  constructor(private activatedRoute: ActivatedRoute, private debtService: DebtService ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.getDebt(params['id']);
    });
  }

  async getDebt(id: number) {
    await this.debtService.getDebt(id).subscribe(data => {
      this.debt = data;
    }, error => {
      alert(error.message);
    });
  }

}
