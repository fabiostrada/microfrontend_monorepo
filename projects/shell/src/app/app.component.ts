import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent, SharedService } from 'shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent extends BaseComponent implements OnInit {
  
  public value!: string;

  constructor(private sharedService: SharedService) {
      super();
  }

  ngOnInit(): void {
      this.sharedService.getLanguage()
          .pipe(takeUntil(this.unsubscribeAll)) 
          .subscribe(value => {
              console.log('Value change', value);
              this.value = value;
          });
  }
  
}
