import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import { MatSort } from '@angular/material/sort';
import {MatSortModule} from '@angular/material/sort';
import { MatDialog } from '@angular/material/dialog';
import * as XLSX from 'xlsx';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatIconModule,MatSortModule,CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  @ViewChild(MatPaginator) value :MatPaginator
  @ViewChild(MatSort) sort :MatSort
  companyId:1
 colums=['id','username','email','mobile','edit','delte']
product:any;
arraylength:[];

isloading:boolean=false;
constructor(private productService:ServiceService ){}

getProductDetails(){
  const companyId = 1
  this.productService.getProduct(companyId).subscribe((res :any)=>{
    this.product = res.data;
    console.log("data",this.product);
   this.product=new MatTableDataSource(res.data);
   this.isloading=!this.isloading
   console.log(this.isloading,"isload");
this.arraylength=res
   this.product.paginator=this.value
   this.product.sort=this.sort
  })
}
ngOnInit(): void {
  debugger
  this.getProductDetails();
}
exportToExcel(): void {
    
  const dataToExport = this.product.filteredData.map(row => {
    return {
      'ID': row.id,
      'Completed': row.completed,
      'UserId': row.userId,
      'Title': row.title
    };
  });

  const worksheet = XLSX.utils.json_to_sheet(dataToExport);


  const workbook = XLSX.utils.book_new();
  
 
  XLSX.utils.book_append_sheet(workbook, worksheet, 'Product');

  
  XLSX.writeFile(workbook, 'ingredients.xlsx');
}
filter(event){
  this.product.filter=event.target.value;
}
}
