import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent, SharedService } from 'shared';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.scss']
})
export class AdminHomeComponent extends BaseComponent implements OnInit {

  public language!: string;

  constructor(private sharedService: SharedService) { 
    super();
  }

  ngOnInit(): void {
    this.sharedService.getLanguage()
        .pipe(takeUntil(this.unsubscribeAll))
        .subscribe(language => {
            this.language = language;
        });
  }

}
