import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { EscannerPage } from './escanner.page';

describe('EscannerPage', () => {
  let component: EscannerPage;
  let fixture: ComponentFixture<EscannerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EscannerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(EscannerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
