import { Component, EventEmitter, Input, Output } from '@angular/core';

import { user } from '../../models/user.model';

import { OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input()
  user?: user | null;
  @Input()
  userIsAuthenticated?: boolean = false;
  @Output()
  logout = new EventEmitter<any>();

  ngOnInit(): void {}
  constructor() {}

  ngOnDestroy(): void {
    this.onLogout();
  }
  onLogout() {
    console.log('logout 1');
    this.logout.emit();
  }
  onClick(): void {}
}
