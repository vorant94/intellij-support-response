import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneMoreNewComponentComponent } from './one-more-new-component.component';

describe('OneMoreNewComponentComponent', () => {
  let component: OneMoreNewComponentComponent;
  let fixture: ComponentFixture<OneMoreNewComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OneMoreNewComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OneMoreNewComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
