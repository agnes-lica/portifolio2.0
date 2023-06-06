import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideRigthComponent } from './aside-rigth.component';

describe('AsideRigthComponent', () => {
  let component: AsideRigthComponent;
  let fixture: ComponentFixture<AsideRigthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AsideRigthComponent]
    });
    fixture = TestBed.createComponent(AsideRigthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
