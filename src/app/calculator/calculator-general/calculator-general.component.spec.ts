import { ComponentFixture, TestBed } from '@angular/core/testing'; 
import { CalculatorGeneralComponent } from './calculator-general.component';


describe('CalculatorGeneralComponent', () => {
  let component: CalculatorGeneralComponent;
  let fixture: ComponentFixture<CalculatorGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculatorGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculatorGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
