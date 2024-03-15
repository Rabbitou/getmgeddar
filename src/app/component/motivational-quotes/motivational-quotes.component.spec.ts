import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotivationalQuotesComponent } from './motivational-quotes.component';

describe('MotivationalQuotesComponent', () => {
  let component: MotivationalQuotesComponent;
  let fixture: ComponentFixture<MotivationalQuotesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MotivationalQuotesComponent]
    });
    fixture = TestBed.createComponent(MotivationalQuotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
