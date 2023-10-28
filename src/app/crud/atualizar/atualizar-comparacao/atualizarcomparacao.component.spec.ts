import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizarcomparacaoComponent } from './atualizarcomparacao.component';

describe('AtualizarcomparacaoComponent', () => {
  let component: AtualizarcomparacaoComponent;
  let fixture: ComponentFixture<AtualizarcomparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarcomparacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarcomparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
