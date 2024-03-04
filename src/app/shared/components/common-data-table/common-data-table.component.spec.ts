import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonDataTableComponent } from './common-data-table.component';

describe('CommonDataTableComponent', () => {
  let component: CommonDataTableComponent;
  let fixture: ComponentFixture<CommonDataTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CommonDataTableComponent]
    });
    fixture = TestBed.createComponent(CommonDataTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
