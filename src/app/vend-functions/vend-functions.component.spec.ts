import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VendFunctionsComponent } from './vend-functions.component';

describe('VendFunctionsComponent', () => {
  let component: VendFunctionsComponent;
  let fixture: ComponentFixture<VendFunctionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VendFunctionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VendFunctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
