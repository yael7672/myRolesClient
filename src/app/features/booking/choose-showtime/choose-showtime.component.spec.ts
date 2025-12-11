import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseShowtimeComponent } from './choose-showtime.component';

describe('ChooseShowtimeComponent', () => {
  let component: ChooseShowtimeComponent;
  let fixture: ComponentFixture<ChooseShowtimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseShowtimeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ChooseShowtimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
