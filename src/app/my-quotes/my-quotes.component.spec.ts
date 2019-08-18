import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuotesComponent } from './my-quotes.component';

describe('MyQuotesComponent', () => {
  let component: MyQuotesComponent;
  let fixture: ComponentFixture<MyQuotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
