import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpeningUpdateComponent } from './opening-update.component';

describe('OpeningUpdateComponent', () => {
  let component: OpeningUpdateComponent;
  let fixture: ComponentFixture<OpeningUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OpeningUpdateComponent]
    });
    fixture = TestBed.createComponent(OpeningUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
