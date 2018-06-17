import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExampleTestComponent } from './example-test.component';

describe('ExampleTestComponent', () => {
  let component: ExampleTestComponent;
  let fixture: ComponentFixture<ExampleTestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExampleTestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExampleTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
