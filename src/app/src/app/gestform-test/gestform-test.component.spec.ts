import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestformTestComponent } from './gestform-test.component';

describe('GestformTestComponent', () => {
  let component: GestformTestComponent;
  let fixture: ComponentFixture<GestformTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestformTestComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GestformTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
