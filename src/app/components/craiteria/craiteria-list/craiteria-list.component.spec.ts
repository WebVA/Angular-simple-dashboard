import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CraiteriaListComponent } from './craiteria-list.component';

describe('CraiteriaListComponent', () => {
  let component: CraiteriaListComponent;
  let fixture: ComponentFixture<CraiteriaListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraiteriaListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CraiteriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
