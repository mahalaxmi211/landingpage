import { Component, OnInit, viewChild, ViewChild } from '@angular/core';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import { ServiceService } from '../service.service';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatPaginator } from '@angular/material/paginator';
//import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon'
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import * as XLSX from 'xlsx';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSort } from '@angular/material/sort';
import { PopupComponent } from '../popup/popup.component';
@Component({
  selector: 'app-user',
  standalone: true,
  imports: [MatTableModule,MatPaginatorModule,MatIconModule,MatCheckboxModule,MatDialogModule,MatButtonModule,ReactiveFormsModule,FormsModule,CommonModule,MatSortModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})

export class UserComponent implements OnInit {
  
  @ViewChild(MatPaginator)value:MatPaginator
  @ViewChild(MatSort) sort :MatSort
  displayedColumns=['checkbox','id','name','username','phone','address','actions','edit',];
  selection: boolean[] = new Array(10).fill(false);
  userlist:any;

  isloading:boolean=false
  isedit:boolean=false
  dialog: any;
  constructor(public  userservice :ServiceService,dialog1:MatDialog){

  }
  //OpenPopup
  OpenPopUp(){
    this.dialog.open(PopupComponent)
  }
   // Toggle all checkboxes when "Select All" is clicked
 isedited(){
    alert('are you sure')
    debugger
    console.log("areee")  
  const value=confirm('Are you sure delte')
  }
  ngOnInit(): void {
    this.getAllUsersData()

  }
  openModel()
{
  debugger
  const buttonedit=document.getElementById('id01');
  console.log(buttonedit,"buttonedit");
  if(buttonedit != null){
    buttonedit.style.display='block';  }
    
}
closeModel(){
  const buttonedit=document.getElementById('id01');
  if(buttonedit != null){
    buttonedit.style.display='none';
}
}
  getAllUsersData() {
    this.userservice.getAllUsers().subscribe((res: any) => {
      this.isloading = !this.isloading; // Toggle loading status
  
      // Set the response data to userlist with MatTableDataSource
      this.userlist = new MatTableDataSource(res);
      this.userlist.sort=this.sort
      // Attach the paginator to the data source
      this.userlist.paginator = this.value;
  
      // Log the paginator value for debugging
      console.log(this.value, "paginator value");
    });
  }
  exportToExcel(): void {
    
    const dataToExport = this.userlist.filteredData.map(row => {
      return {
        'ID': row.id,
        'Name': row.name,
        'Username': row.username,
        'Phone': row.phone,
        'Address': row.address.street
      };
    });

    const worksheet = XLSX.utils.json_to_sheet(dataToExport);

  
    const workbook = XLSX.utils.book_new();
    
   
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Users');

    
    XLSX.writeFile(workbook, 'userlist.xlsx');
  }
  toggleAllSelection(event: any): void {
    const isChecked = event.checked;
    this.selection = this.selection.map(() => isChecked);
  }

  // Check if all checkboxes are selected
  isAllSelected(): boolean {
    debugger
    return this.selection.every(selected => selected);
  }

  // Check if some but not all checkboxes are selected
  isIndeterminate(): boolean {
    return this.selection.some(selected => selected) && !this.isAllSelected();
  }
  //search function
  filter(e:any){
    this.userlist.filter=e.target.value
  }

}  
