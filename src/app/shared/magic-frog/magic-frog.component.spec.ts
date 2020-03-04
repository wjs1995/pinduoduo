import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MagicFrogComponent } from './magic-frog.component';

describe('MagicFrogComponent', () => {
  let component: MagicFrogComponent;
  let fixture: ComponentFixture<MagicFrogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MagicFrogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MagicFrogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
