import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConocimientoTotalComponent } from './conocimiento-total.component';

describe('ConocimientoTotalComponent', () => {
  let component: ConocimientoTotalComponent;
  let fixture: ComponentFixture<ConocimientoTotalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConocimientoTotalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConocimientoTotalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
