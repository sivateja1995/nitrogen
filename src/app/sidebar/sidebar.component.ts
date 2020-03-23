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
      icon: 'more-horizontal-outline',
      
      children:[
        {
          title:'Create Bay Operator',
          icon:'people-outline'
        },
        {
          title:'Reports',
          icon:'file-outline'
        },
        {
          title:'Admin Panel',
          icon:'shield-outline'
        }
      ]
    },
  {
    title:'Lubes',
    icon:'droplet-outline'
  },
  {
    title:'Car Wash',
    icon:'car-outline'
  }
];

  constructor() { }

  ngOnInit(): void {
  }

}
