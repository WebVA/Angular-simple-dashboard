import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupCategoryComponent } from './setup-category.component';

describe('SetupCategoryComponent', () => {
  let component: SetupCategoryComponent;
  let fixture: ComponentFixture<SetupCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SetupCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
