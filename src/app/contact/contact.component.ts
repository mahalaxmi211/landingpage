import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ServiceService } from '../service.service';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatPaginator, MatPaginatorModule} from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatIconModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  @ViewChild(MatPaginator)value:MatPaginator
 colums=['completed','id','userId','actions','edit']
product:any;
arraylength:[];
isloading:boolean=false;
constructor(private productService:ServiceService ){}
getProductDetails(){
  this.productService.getProduct().subscribe((res :any)=>{
   this.product=new MatTableDataSource(res);
   this.isloading=!this.isloading
   console.log(this.isloading,"isload");
this.arraylength=res
   this.product.value=this.value
  })
}
ngOnInit(): void {
  this.getProductDetails()
}
}
