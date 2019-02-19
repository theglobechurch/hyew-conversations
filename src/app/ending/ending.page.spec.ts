import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EndingPage } from './ending.page';

describe('EndingPage', () => {
  let component: EndingPage;
  let fixture: ComponentFixture<EndingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EndingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EndingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
