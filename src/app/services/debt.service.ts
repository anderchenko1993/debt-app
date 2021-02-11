import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_BACK } from '../appsettings';

@Injectable({
  providedIn: 'root'
})
export class DebtService {

  constructor(private http: HttpClient) { }

  getDebts(): Observable<any> {
    return this.http.get(`${API_BACK}/debts`);
  }

  getDebt(id: number): Observable<any> {
    return this.http.get(`${API_BACK}/debts/${id}`);
  }

  saveDebt(data: any): Observable<any> {
    return this.http.post(`${API_BACK}/debts`, data);
  }

  updateDebt(data: any): Observable<any> {
    return this.http.put(`${API_BACK}/debts/${data._id}`, data);
  }

  deleteDebt(id: number): Observable<any> {
    return this.http.delete(`${API_BACK}/debts/${id}`);
  }

}
