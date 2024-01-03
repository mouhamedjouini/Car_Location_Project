import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpruntbyuserComponent } from './empruntbyuser.component';

describe('EmpruntbyuserComponent', () => {
  let component: EmpruntbyuserComponent;
  let fixture: ComponentFixture<EmpruntbyuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EmpruntbyuserComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EmpruntbyuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
