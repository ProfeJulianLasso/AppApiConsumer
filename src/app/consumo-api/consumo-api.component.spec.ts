import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumoApiComponent } from './consumo-api.component';

describe('ConsumoApiComponent', () => {
  let component: ConsumoApiComponent;
  let fixture: ComponentFixture<ConsumoApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsumoApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ConsumoApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
