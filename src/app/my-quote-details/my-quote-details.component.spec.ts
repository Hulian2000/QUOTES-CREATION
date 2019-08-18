import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyQuoteDetailsComponent } from './my-quote-details.component';

describe('MyQuoteDetailsComponent', () => {
  let component: MyQuoteDetailsComponent;
  let fixture: ComponentFixture<MyQuoteDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyQuoteDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyQuoteDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
