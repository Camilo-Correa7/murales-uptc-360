import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MuralInfo } from './mural-info';

describe('MuralInfo', () => {
  let component: MuralInfo;
  let fixture: ComponentFixture<MuralInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MuralInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MuralInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
