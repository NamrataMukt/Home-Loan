import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatasticsComponent } from './statastics.component';

describe('StatasticsComponent', () => {
  let component: StatasticsComponent;
  let fixture: ComponentFixture<StatasticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StatasticsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StatasticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
