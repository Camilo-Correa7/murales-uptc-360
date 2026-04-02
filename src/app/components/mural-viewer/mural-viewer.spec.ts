import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralViewer } from './mural-viewer';

describe('MuralViewer', () => {
  let component: MuralViewer;
  let fixture: ComponentFixture<MuralViewer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralViewer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralViewer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
