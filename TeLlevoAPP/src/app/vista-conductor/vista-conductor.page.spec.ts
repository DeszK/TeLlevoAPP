import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VistaConductorPage } from './vista-conductor.page';

describe('VistaConductorPage', () => {
  let component: VistaConductorPage;
  let fixture: ComponentFixture<VistaConductorPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaConductorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
