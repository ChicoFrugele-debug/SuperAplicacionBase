import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Loader1Page } from './loader1.page';

describe('Loader1Page', () => {
  let component: Loader1Page;
  let fixture: ComponentFixture<Loader1Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(Loader1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
