import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectOneComponent } from './project-one.component';

describe('ProjectOneComponent', () => {
  let component: ProjectOneComponent;
  let fixture: ComponentFixture<ProjectOneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectOneComponent]
    });
    fixture = TestBed.createComponent(ProjectOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
