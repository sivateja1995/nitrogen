import { FormControl } from '@angular/forms';
import { NbSidebarService,NB_WINDOW,NbMenuService } from '@nebular/theme';
import { Component,OnInit, ChangeDetectionStrategy, NgModule, Inject} from '@angular/core';
import {filter,map} from 'rxjs/operators';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  items = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  title = 'nitrogen';
  constructor(private sidebarService: NbSidebarService, private nbMenuService: NbMenuService, @Inject(NB_WINDOW) private window) {
  }

  ngOnInit() {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  toggle(){
    this.sidebarService.toggle(true,'compacted')
      
    }


}



