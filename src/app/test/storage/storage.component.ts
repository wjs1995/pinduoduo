import {Component, OnInit, Self, SkipSelf} from '@angular/core';
import {BROWSER_STORAGE, BrowserStorageService} from '../../shared/service/browser-storage.service';

@Component({
  selector: 'app-storage',
  templateUrl: './storage.component.html',
  styleUrls: ['./storage.component.css'],
  providers: [
    BrowserStorageService,
    {provide: BROWSER_STORAGE, useFactory: () => sessionStorage}
  ]
})
export class StorageComponent implements OnInit {

  constructor(
    @Self() private sessionStorageService: BrowserStorageService,
    @SkipSelf() private localStorageService: BrowserStorageService
  ) {
  }

  ngOnInit() {
  }

  setSession() {
    this.sessionStorageService.set('hero', 'Dr Nice - Session');
  }

  setLocal() {
    this.localStorageService.set('hero', 'Dr Nice - Local');
  }

  getLocal() {
    console.log(this.localStorageService.get('hero'));
  }

  getSession() {
    console.log(this.sessionStorageService.get('hero'));
  }
}
