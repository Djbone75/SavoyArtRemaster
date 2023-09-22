import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/services.service';

import { MatSnackBar } from '@angular/material/snack-bar';

@NgModule({
  imports: [CommonModule],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders<NgModule> {
    return {
      ngModule: SharedModule,
      providers: [AuthService, MatSnackBar],
    };
  }
}
