import { Component, OnInit } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
      this.sharedService.getLanguage()
          .subscribe(language => {
              console.log('Change language', language);
          });
  }
  
}
