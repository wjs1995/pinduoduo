import {AfterViewInit, Component, OnInit} from '@angular/core';
import {TabsHeaderType} from './shared/components';
import {Observable} from 'rxjs';
import {NavigationEnd, Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {
  selectedIndex$: Observable<number>;

  constructor(private router: Router) {
  }

  ngAfterViewInit(): void {
  }

  change(tab: TabsHeaderType) {
   this.router.navigate([tab.link])
  }

  ngOnInit(): void {
    this.selectedIndex$ = this.router.events
      .pipe(
        filter(ev => ev instanceof NavigationEnd),
        map((ev: NavigationEnd) => {
          const arr = ev.url.split('/');
          return arr.length > 1 ? arr[1] : 'home';
        }),
        map(p => {
         return  this.getSelectedIndex(p)
        })
      );
  }

  getSelectedIndex(tab: string) {
    return tab === 'recommend' ? 1 : tab === 'category' ? 2 : tab === 'chat' ? 3 : tab === 'my' ? 4 : 0;
  }
}
