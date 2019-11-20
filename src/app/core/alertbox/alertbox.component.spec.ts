import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {DialogModule} from 'primeng/dialog';
import { AlertboxComponent } from './alertbox.component';

describe('AlertboxComponent', () => {
  let component: AlertboxComponent;
  let fixture: ComponentFixture<AlertboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ DialogModule ],
      declarations: [ AlertboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.displayAlert).toBeFalsy();
  });
  it('displayAlert to be true', () => {
   component.showDialog();
   expect(component.displayAlert).toBeTruthy();
  });
});
