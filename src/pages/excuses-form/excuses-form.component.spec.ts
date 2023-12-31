import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcusesFormComponent } from './excuses-form.component';

describe('ExcusesFormComponent', () => {
  let component: ExcusesFormComponent;
  let fixture: ComponentFixture<ExcusesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExcusesFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExcusesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
