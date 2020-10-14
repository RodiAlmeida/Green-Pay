import { Component } from '@angular/core';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) { 
    
   }

  openSelf() {
    this.iab.create(`https://loja.greenpayoficial.com`, `_self`, `location=no, zoom=no`);
  }

}
