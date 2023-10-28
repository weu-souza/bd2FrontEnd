import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemoverComparacaoComponent } from './remover-comparacao.component';

describe('RemoverComparacaoComponent', () => {
  let component: RemoverComparacaoComponent;
  let fixture: ComponentFixture<RemoverComparacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemoverComparacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RemoverComparacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
