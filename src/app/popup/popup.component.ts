import { Component } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
@Component({
  selector: 'app-popup',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './popup.component.html',
  styleUrl: './popup.component.css'
})
export class PopupComponent {
  isopened:boolean=false
  yesDelete(){
    const idvalue=document.getElementById('popup')
    if(!idvalue != null){
      this.isopened=!this.isopened
      idvalue.style.display='block'
    }

  }
}
