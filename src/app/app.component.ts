import { NbSidebarService } from '@nebular/theme';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'nitrogen';
  constructor(private sidebarService: NbSidebarService) {
  }

  toggle(){
    this.sidebarService.toggle(true,'compacted')
      
    }

    
  


}



