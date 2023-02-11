/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SetupModeOnComponent } from './setupModeOn.component';

describe('SetupModeOnComponent', () => {
  let component: SetupModeOnComponent;
  let fixture: ComponentFixture<SetupModeOnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupModeOnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupModeOnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
