import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ServiceService } from '../service.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import * as XLSX from 'xlsx';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatIconModule,MatCheckboxModule,MatDialogModule,MatButtonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  
  @ViewChild(MatPaginator)value:MatPaginator
  displayedColumns=['checkbox','id','name','username','phone','address','actions','edit',];
  selection: boolean[] = new Array(10).fill(false);
  userlist:any;

  isloading:boolean=false
  isedit:boolean=false
  constructor(private  userservice :ServiceService){

  }
   // Toggle all checkboxes when "Select All" is clicked
   exportToExcel(): void {
    // Log the userlist to debug
    console.log('User List:', this.userlist);

    // Ensure userlist is an array
    if (!Array.isArray(this.userlist)) {
      console.error('userlist is not an array:', this.userlist);
      return;
    }

    // Convert JSON data to a worksheet
    const worksheet = XLSX.utils.json_to_sheet(this.userlist);

    // Create a new workbook
    const workbook = XLSX.utils.book_new();
    
    // Append the worksheet to the workbook
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

    // Generate a binary string for the workbook and trigger download
    XLSX.writeFile(workbook, 'userlist.xlsx');
  }    isedited(){
    alert('are you sure')
    debugger
    console.log("areee")  
  const value=confirm('Are you sure delte')
  }
  ngOnInit(): void {
    this.getAllUsersData()
    
  }


  getAllUsersData(){
    this.userservice.getAllUsers().subscribe((res:any)=>{
     // console.log(res)
     this.isloading=!this.isloading
this.userlist=new MatTableDataSource(res)

this.userlist.value=this.value
console.log(this.value,"value")
    })
  }
  
}
