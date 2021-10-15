/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HelloUserComponent } from './hello-user.component';

describe('HelloUserComponent', () => {
  let component: HelloUserComponent;
  let fixture: ComponentFixture<HelloUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HelloUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelloUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
