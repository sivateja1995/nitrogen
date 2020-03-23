import { NbSelectModule } from '@nebular/theme';
import { Component, OnInit, ChangeDetectionStrategy, NgModule } from '@angular/core';
import {FormControl} from '@angular/forms'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  selectedItemNgModel;
  selectedItemFormControl= new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

}
