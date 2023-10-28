import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarComputadorComponent } from './atualizar-computador.component';

describe('AtualizarComputadorComponent', () => {
  let component: AtualizarComputadorComponent;
  let fixture: ComponentFixture<AtualizarComputadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarComputadorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarComputadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
