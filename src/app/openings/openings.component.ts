import { Component } from '@angular/core';
import { opening } from 'src/models/openings.model';
import { OpeningsService } from './openings.service';
import { Store } from 'src/store';
@Component({
  selector: 'app-openings',
  templateUrl: './openings.component.html',
  styleUrls: ['./openings.component.scss'],
})
export class OpeningsComponent {
  updatedOpenings: opening[] = [];
  OpeningSub$ = this.store
    .select<opening[]>('openings')
    .subscribe((openings) => {
      
      this.updatedOpenings = openings;
    });

  constructor(private openingsService: OpeningsService, private store: Store) {}
}
