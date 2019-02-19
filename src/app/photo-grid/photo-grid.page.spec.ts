import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoGridPage } from './photo-grid.page';

describe('PhotoGridPage', () => {
  let component: PhotoGridPage;
  let fixture: ComponentFixture<PhotoGridPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoGridPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoGridPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
