import { Injectable, Optional, SkipSelf } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LanguageConfig } from '../config/language.config';

@Injectable({
  deps: [[new Optional(), new SkipSelf(), SharedService]],
  providedIn: 'root',
  useFactory: (instance: SharedService | null) => instance || new SharedService(),
})
export class SharedService {

  private languageBs: BehaviorSubject<string> = new BehaviorSubject<string>(LanguageConfig.IT);
  private language$: Observable<string> = this.languageBs.asObservable();
  
  public setLanguage(value: string): void {
    this.languageBs.next(value);
  }

  public getLanguage(): Observable<string> {
    return this.language$;
  }

}
