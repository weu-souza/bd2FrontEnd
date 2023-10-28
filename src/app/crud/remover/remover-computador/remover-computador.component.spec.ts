import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverComputadorComponent } from './remover-computador.component';

describe('RemoverComputadorComponent', () => {
  let component: RemoverComputadorComponent;
  let fixture: ComponentFixture<RemoverComputadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverComputadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
