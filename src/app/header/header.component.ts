import { NB_WINDOW,NbMenuService } from '@nebular/theme';
import { Component} from '@angular/core';
import {FormControl} from '@angular/forms'


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{
  

  selectedItemFormControl= new FormControl();
  constructor() { }

  
}
