import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-electricity-consomation';
  navbarShow:Boolean = false ;

  
  toggleNavbar(){
    // if(this.navbarClass == 'navbar-show')
    // this.navbarClass ='' ;
    // else this.navbarClass ='navbar-show' ;
    this.navbarShow = !this.navbarShow ;
  }

}
