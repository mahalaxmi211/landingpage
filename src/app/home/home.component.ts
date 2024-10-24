import { Component } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private dialog:MatDialog){}
  openPopUp(){
this.dialog.open(ProfileComponent,{
  height:'600px',
  width:'800px',
  data:{
   'delet':'Are you sure'
  }
})
  }
}
