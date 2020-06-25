import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DataReceiverComponent } from './data-receiver.component';

describe('DataReceiverComponent', () => {
  let component: DataReceiverComponent;
  let fixture: ComponentFixture<DataReceiverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DataReceiverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DataReceiverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
