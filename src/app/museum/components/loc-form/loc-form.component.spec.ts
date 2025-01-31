import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocFormComponent } from './loc-form.component';

describe('LocFormComponent', () => {
  let component: LocFormComponent;
  let fixture: ComponentFixture<LocFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LocFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LocFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
