import { Component, OnInit } from '@angular/core';
import { LanguageConfig, SharedService } from 'shared';

@Component({
  selector: 'app-dashboard-home',
  templateUrl: './dashboard-home.component.html',
  styleUrls: ['./dashboard-home.component.scss']
})
export class DashboardHomeComponent implements OnInit {

  private currentLanguage!: string;

  constructor(private sharedService: SharedService) { }

  ngOnInit(): void {
    this.currentLanguage = LanguageConfig.IT;
  }

  public changeLanguage() {    
    this.currentLanguage = this.currentLanguage === LanguageConfig.IT ? LanguageConfig.EN: LanguageConfig.IT;
    this.sharedService.setLanguage(this.currentLanguage);
    console.log(this.currentLanguage);
  }

}
