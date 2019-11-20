import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HomeComponent } from './home.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AppInputComponent } from '../core/app-input/app-input.component';
import { DataServiceService } from '../core/dataService/data-service.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientModule,
        ReactiveFormsModule
      ],
      declarations: [ HomeComponent, AppInputComponent ],
      providers: [ DataServiceService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('should call saveDestCode', () => {
    component.saveDestCode('Bangalore');
  });
  it('should call onchangedata', () => {
    component.onchangedata('Bangalore');
  });
  it('should call onGetEstimate()', () => {
    component.onGetEstimate();
    const hds = fixture.debugElement.injector.get(DataServiceService);
    const saveSpy = spyOn(hds, 'saveUserData').and.callThrough();
   // expect(component.onGetEstimate).toHaveBeenCalled();
    const names = '';
    const mobile = 90788;
    expect(component.name).toBe(names, 'component hero has new name');
  });
});



