import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfTwoContentComponent } from './pdf-two-content.component';

describe('PdfTwoContentComponent', () => {
  let component: PdfTwoContentComponent;
  let fixture: ComponentFixture<PdfTwoContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfTwoContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfTwoContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
