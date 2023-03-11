import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CounterObjectComponent } from './counter-object.component';

describe('CounterObjectComponent', () => {
  let component: CounterObjectComponent;
  let fixture: ComponentFixture<CounterObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CounterObjectComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CounterObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
