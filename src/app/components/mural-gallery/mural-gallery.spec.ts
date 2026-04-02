import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralGallery } from './mural-gallery';

describe('MuralGallery', () => {
  let component: MuralGallery;
  let fixture: ComponentFixture<MuralGallery>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralGallery]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralGallery);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
