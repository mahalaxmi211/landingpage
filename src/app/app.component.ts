import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { PicComponent } from './pic/pic.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,MatSidenavModule,MatToolbarModule,MatIconModule,MatButtonModule,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  isclicked:boolean=false
  title = 'landingpage';
  toggle(){
    this.isclicked=!this.isclicked
  }
  constructor(private matdialog:MatDialog){}
  formDetails(){
this.matdialog.open(PicComponent,{
  height:'500px',
  width:'500px'
})
  }
}
