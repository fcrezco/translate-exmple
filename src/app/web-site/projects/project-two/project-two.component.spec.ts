import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTwoComponent } from './project-two.component';

describe('ProjectTwoComponent', () => {
  let component: ProjectTwoComponent;
  let fixture: ComponentFixture<ProjectTwoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ProjectTwoComponent]
    });
    fixture = TestBed.createComponent(ProjectTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
