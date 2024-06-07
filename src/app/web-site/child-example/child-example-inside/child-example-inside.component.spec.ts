import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildExampleInsideComponent } from './child-example-inside.component';

describe('ChildExampleInsideComponent', () => {
  let component: ChildExampleInsideComponent;
  let fixture: ComponentFixture<ChildExampleInsideComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ChildExampleInsideComponent]
    });
    fixture = TestBed.createComponent(ChildExampleInsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
