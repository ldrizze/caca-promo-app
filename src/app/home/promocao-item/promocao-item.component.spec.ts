import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PromocaoItemComponent } from './promocao-item.component';

describe('PromocaoItemComponent', () => {
  let component: PromocaoItemComponent;
  let fixture: ComponentFixture<PromocaoItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PromocaoItemComponent ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PromocaoItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
