import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdicionarComparacaoComponent } from './adicionar-comparacao.component';

describe('AdicionarComparacaoComponent', () => {
  let component: AdicionarComparacaoComponent;
  let fixture: ComponentFixture<AdicionarComparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdicionarComparacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdicionarComparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
