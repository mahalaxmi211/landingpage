import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }
  getAllUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }
  getProduct(companyId:number){
    return this.http.get(`http://139.59.37.38:3000/api/all?company_id=${companyId}`)
  }
}
