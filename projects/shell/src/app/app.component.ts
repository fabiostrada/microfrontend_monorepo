import { Component, OnInit } from '@angular/core';
import { SharedService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public value!: string;

  constructor(private sharedService: SharedService) {

  }

  ngOnInit(): void {
      this.sharedService.getLanguage()
          .subscribe(value => {
              console.log('Value change', value);
              this.value = value;
          });
  }
  
}
