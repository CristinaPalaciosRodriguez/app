import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdfOneContentComponent } from './pdf-one-content.component';

describe('PdfOneContentComponent', () => {
  let component: PdfOneContentComponent;
  let fixture: ComponentFixture<PdfOneContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdfOneContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PdfOneContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
