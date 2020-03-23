import { NbMenuModule,NbMenuItem } from '@nebular/theme';
import {FormsModule} from '@angular/forms'
import { Component, OnInit,ChangeDetectionStrategy, } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  changeDetection:ChangeDetectionStrategy.OnPush,
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  
  items: NbMenuItem[] = [
    {
      title: 'Nitrogen Filling',
      icon: 'person-outline',
      
      children:[
        {
          title:'Dashboard'
        },
        {
          title:'Analytics'
        }
      ]
    },

    
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
