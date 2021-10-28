import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonSharedComponent } from './button-shared.component';

describe('ButtonSharedComponent', () => {
  let component: ButtonSharedComponent;
  let fixture: ComponentFixture<ButtonSharedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ButtonSharedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
