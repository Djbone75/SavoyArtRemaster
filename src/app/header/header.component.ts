import { Component, EventEmitter, Input, Output } from '@angular/core';

import { user } from '../../models/user.model';

import { OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReservationComponent } from '../reservation/reservation.component';

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
  constructor(public dialog: MatDialog) {}

  ngOnDestroy(): void {
    this.onLogout();
  }
  onLogout() {
    this.logout.emit();
  }
  openDialog() {
    this.dialog.open(ReservationComponent, {});
  }
}
